from pydantic import BaseModel
import additionals

adds = additionals.Additionals

class Headers(BaseModel):
    ingredients: list(str)
    instructions: list(str)
    additionals: list(adds)