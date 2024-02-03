from typing import List
from pydantic import BaseModel

class Additionals(BaseModel):
    name: str
    content: List[str]
