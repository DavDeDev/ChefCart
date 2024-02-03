from pydantic import BaseModel
import additionals
import headers.ingredients as ingredients
import headers.instructions as instructions

class Headers(BaseModel):
    ingredients: ingredients
    instructions: instructions
    additional: additionals