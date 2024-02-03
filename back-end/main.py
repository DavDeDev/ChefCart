from fastapi import FastAPI
from fastapi.encoders import jsonable_encoder
from fastapi.responses import JSONResponse

import firebase_admin
import api_key
from firebase_admin import credentials
from firebase_admin import db

import recipe

cred = credentials.Certificate(api_key.api_key())

default_app = firebase_admin.initialize_app(cred, {
    'databaseURL': 'https://chefcart-4f2c4-default-rtdb.firebaseio.com/'
})

ref = db.reference('/some_resource')
# print(ref.get())

# snapshot = ref.order_by_key().get()

app = FastAPI()

@app.get("/")
async def root():
    return {"message": "Hello World"}

@app.get("/recipe")
async def root():
    return ref.order_by_key().get()

# @app.put("/recipe")
# def update_item(item: recipe.Recipe):
#     json_compatible_item_data = jsonable_encoder(item)
#     return JSONResponse(content=json_compatible_item_data)