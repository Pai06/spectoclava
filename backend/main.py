# main.py
from fastapi import FastAPI
from fastapi.responses import JSONResponse
import pandas as pd
import numpy as np
import requests
from bs4 import BeautifulSoup
from numpy import floor
import matplotlib.pyplot as plt
from io import BytesIO
import base64

app = FastAPI()

def fetch_cricket_data():
    batter = 'Jos Buttler'
    bowler = 'Pat Cummins'
    url = "http://www.cricmetric.com/matchup.py?batsman=" + batter.replace(' ', '+') + "&bowler=" + bowler.replace(' ', '+')
    response = requests.get(url)

    if response.status_code == 200:
        html_content = response.content
        soup = BeautifulSoup(html_content, "html.parser")
        tables = soup.find_all("table")

        dataframes = []
        for table in tables:
            df = pd.read_html(str(table))[0]
            dataframes.append(df)

        merged_df = pd.concat(dataframes).groupby('Year').sum(numeric_only=True).reset_index()
        merged_df['SR'] = (merged_df['Runs'] / merged_df['Balls'] * 100).round(2)
        filtered_df = merged_df[merged_df['Year'] != 'Total']
        return filtered_df

    return None

@app.get("/api/cricket-data")
async def get_cricket_data():
    cricket_data = fetch_cricket_data()
    if cricket_data is not None:
        return JSONResponse(content=cricket_data.to_dict(orient='records'))
    else:
        return JSONResponse(content={"error": "Failed to retrieve cricket data"}, status_code=500)
