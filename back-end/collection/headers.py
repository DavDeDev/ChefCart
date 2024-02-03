from typing import List
from pydantic import BaseModel
import collection.additionals as adds

class Headers(BaseModel):
    ingredients: List[str]
    instructions: List[str]
    additionals: List[adds.Additionals]