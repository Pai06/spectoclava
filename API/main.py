from fastapi import FastAPI, Query
from fastapi.responses import JSONResponse
import pandas as pd
import requests
from bs4 import BeautifulSoup
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Configure CORS
origins = [
    "http://localhost:3000",  # Add your frontend URL
    "http://localhost:3001",  # Add your frontend URL
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["GET"],
    allow_headers=["*"],
)

def fetch_cricket_data(batsman: str, bowler: str):
    url = f"http://www.cricmetric.com/matchup.py?batsman={batsman.replace(' ', '+')}&bowler={bowler.replace(' ', '+')}"
    try:
        response = requests.get(url)

        if response.status_code == 200:
            html_content = response.content
            soup = BeautifulSoup(html_content, "html.parser")
            tables = soup.find_all("table")

            dataframes = []
            for table in tables:
                df = pd.read_html(str(table))[0]
                dataframes.append(df)

            merged_df = pd.concat(dataframes)
            
            # Cleanup and data transformation
            merged_df['Year'] = pd.to_numeric(merged_df['Year'], errors='coerce')
            merged_df = merged_df.dropna(subset=['Year'])  # Remove rows with NaN in 'Year' column
            
            # Calculate Strike Rate (SR)
            merged_df['SR'] = (merged_df['Runs'] / merged_df['Balls'] * 100).round(2)

            filtered_df = merged_df[merged_df['Year'] != 'Total']
            return filtered_df

        return None
    except Exception as e:
        print(f"Error fetching cricket data: {str(e)}")
        return None

@app.get("/api/cricket-data")
async def get_cricket_data(batsman: str = Query(...), bowler: str = Query(...)):
    cricket_data = fetch_cricket_data(batsman, bowler)
    if cricket_data is not None:
        data = cricket_data[['Year', 'SR', 'Runs', 'Balls', 'Outs', 'Dots', '4s', '6s', 'Avg']].to_dict(orient='records')
        return JSONResponse(content=data)
    else:
        return JSONResponse(content={"error": "Failed to retrieve cricket data"}, status_code=500)

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
