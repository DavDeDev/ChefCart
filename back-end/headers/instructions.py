from pydantic import BaseModel

class Instructions(BaseModel):
    name: str
    instructions: list(str)