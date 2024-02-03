from pydantic import BaseModel

class Ingredients(BaseModel):
    name: str
    ingredients: list(str)