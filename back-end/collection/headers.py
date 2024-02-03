from pydantic import BaseModel
import collection.additionals as adds

class Headers(BaseModel):
    ingredients: list(str)
    instructions: list(str)
    additionals: list(adds.Additionals)