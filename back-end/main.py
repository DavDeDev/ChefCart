from fastapi import FastAPI
import firebase_admin
import api_key
from firebase_admin import credentials
from firebase_admin import db
import recipe
import chat

cred = credentials.Certificate(api_key.api_key())

default_app = firebase_admin.initialize_app(cred, {
    'databaseURL': 'https://chefcart-4f2c4-default-rtdb.firebaseio.com/'
})

ref = db.reference('/some_resource')

app = FastAPI()

@app.get("/")
async def root():
    return {"message": "Hello World"}

@app.get("/recipe_test")
async def root():
    return ref.order_by_key().get()

@app.post("/recipe")
async def create_item(recipe: recipe.Recipe):
    result = ", ".join(recipe.headers.ingredients)
    grocerylist = chat.groceries(result)
    groceries = comma(grocerylist)
    return {"content": groceries}

def comma(entry):
    if "," or ", " or "." or ". " in entry: 
        text = entry.split(", ")
    return text
