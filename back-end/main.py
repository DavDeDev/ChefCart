from fastapi import FastAPI
from fastapi.encoders import jsonable_encoder
from fastapi.responses import JSONResponse
from pydantic import BaseModel

app = FastAPI()

import recipe

@app.get("/")
async def root():
    return {"message": "Hello World"}

@app.put("/recipe")
def update_item(item: recipe.Recipe):
    json_compatible_item_data = jsonable_encoder(item)
    return JSONResponse(content=json_compatible_item_data)