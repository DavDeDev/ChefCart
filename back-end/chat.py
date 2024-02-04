from openai import OpenAI
import os
import sys

client = OpenAI(
    # This is the default and can be omitted
    api_key=
)

chat_completion = client.chat.completions.create(
    messages=[
        {
            "role": "user",
            "content": "give me the grocery list from this recipe: pizza",
        }
    ],
    model="gpt-3.5-turbo-0125",
)

# print (chat_completion)

# for chunk in chat_completion:
#     if chunk.choices[0].delta.content is not None:
print(chat_completion.choices[0].message.content, end="")
