from pydantic import BaseModel

class Additionals(BaseModel):
    name: str
    content: list(str)
