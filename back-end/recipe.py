from pydantic import BaseModel

import information
import headers

class Recipe(BaseModel):
    name: str
    description: str
    photo: str #change to image, look into firebase
    info: information
    headers: headers