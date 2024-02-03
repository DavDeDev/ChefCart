from pydantic import BaseModel
import additionals
import listofingredients
import listofinstructs

class Headers(BaseModel):
    ingredients: listofingredients
    instructions: listofinstructs
    additional: additionals