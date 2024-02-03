from pydantic import BaseModel


class Info(BaseModel):
    prep: str
    cook: str
    total: str