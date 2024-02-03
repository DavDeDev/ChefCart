from pydantic import BaseModel
import additionals.additionals as additionals
import ingredients 
import instructions 

ings = ingredients.Ingredients
instcs = instructions.Instructions
adds = additionals.Additionals

class Headers(BaseModel):
    ingredients: ings
    instructions: instcs
    additionals: list(adds)