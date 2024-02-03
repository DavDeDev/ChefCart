from pydantic import BaseModel

class Additionals(BaseModel):
    name: str
    additionals: list(str)