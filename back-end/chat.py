# import openai
# import os
# import sys

# # def api_key():
# #     try:  
# #         key = os.environ['API_KEY_CREDENTIALS']
# #         return key
# #     except KeyError: 
# #         print('[error]: `API_KEY_CREDENTIALS` environment variable required')
# #         sys.exit(1)

# openai.api_key = "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"

# model_engine = "gpt-3.5-turbo"
# prompt = "Hi, how are you today?"

# completion = openai.completions.create(
#     model=model_engine,
#     prompt=prompt,
#     max_tokens=1024,
#     n=1,
#     stop=None,
#     temperature=0.5,
# )

# response = completion.choices[0].text
# print(response)

# from openai import OpenAI
# client = OpenAI()

# response = client.completions.create(
#   model="gpt-3.5-turbo-0125",
#   prompt="How are you today?"
# )