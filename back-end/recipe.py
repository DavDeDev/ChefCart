from pydantic import BaseModel

import information
import collection.headers

headers = collection.headers.Headers

class Recipe(BaseModel):
    name: str
    description: str
    photo: str #change to image, look into firebase
    info: information.Info
    headers: headers