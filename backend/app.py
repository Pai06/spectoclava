from analysis_notebook import add_numbers
from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class Numbers(BaseModel):
    num1: int
    num2: int

@app.post("/api/add")
def api_add_numbers(numbers: Numbers):
    result = add_numbers(numbers.num1, numbers.num2)  # Use the imported function
    return {"result": result}