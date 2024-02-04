from openai import OpenAI
import os
from dotenv import load_dotenv
import recipe

load_dotenv()

client = OpenAI(
    api_key=os.getenv('OPENAI_API_KEY')
)

def groceries(str):
    chat_completion = client.chat.completions.create(
        messages=[
            {
                "role": "user",
                "content": str + "make a grocery list from this recipe using this template: 1. meats/poultry and vegetables/ canned foods, example: '20 pounds of meat' / '3kg of pork' \
                    / '20 pounds of bok choy' / '1 kg of red beans' / '3 cans of tuna, 2. spices and condiments, example: 'soy sauce' / 'black pepper' / 'a pack of chilis,' etc. instead of \
                        specifying the exact amount needed since grocery stores sell them by the packaged size. 3. remove unnessacry ingredients such as hot water or cold ice or etc. \
                            Then, combine it into one list without headings or separation, just one grocery list."
            }
        ],
        model="gpt-3.5-turbo-0125",
    )
    return chat_completion.choices[0].message.content

