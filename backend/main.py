from flask import Flask, render_template, jsonify
import nbformat
from flask_cors import CORS
from nbconvert import HTMLExporter
import pandas as pd
import io

app = Flask(__name__)
CORS(app)

@app.route('/')
def run_notebook():
    notebook_path = 'datascraping.ipynb'  # Path to your datascraping.ipynb file

    with open(notebook_path, 'r', encoding='utf-8') as f:
        nb = nbformat.read(f, as_version=4)

    # Execute the notebook
    exec_dict = {}
    exec(nb.cells[0].source, exec_dict)

    # Get the DataFrame from the notebook execution
    df = exec_dict['df']

    # Convert the DataFrame to HTML
    html_table = df.to_html(index=False)

    return render_template('output.html', table=html_table)

@app.route('/api/dataframe')
def get_dataframe():
    notebook_path = 'datascraping.ipynb'  

    with open(notebook_path, 'r', encoding='utf-8') as f:
        nb = nbformat.read(f, as_version=4)

    exec_dict = {}
    exec(nb.cells[0].source, exec_dict)

    df = exec_dict['df']

    json_data = df.to_json(orient='records')

    return jsonify(data=json_data)

@app.route('/dataframe')
def show_dataframe():
    notebook_path = 'datascraping.ipynb'  

    with open(notebook_path, 'r', encoding='utf-8') as f:
        nb = nbformat.read(f, as_version=4)

    # Execute the notebook
    exec_dict = {}
    exec(nb.cells[0].source, exec_dict)

    # Get the DataFrame from the notebook execution
    df = exec_dict['df']

    # Convert the DataFrame to HTML
    html_table = df.to_html(index=False)

    return html_table

if __name__ == '__main__':
    app.run()
