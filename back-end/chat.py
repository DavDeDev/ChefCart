import openai
import os
import sys

def api_key():
    try:  
        key = os.environ['API_KEY_CREDENTIALS']
        return key
    except KeyError: 
        print('[error]: `API_KEY_CREDENTIALS` environment variable required')
        sys.exit(1)

openai.api_key = api_key()

model_engine = "text-davinci-003"
prompt = "Hi, how are you today?"

completion = openai.completions.create(
    model=model_engine,
    prompt=prompt,
    n=1,
    stop=None,
    temperature=0.5,
)

response = completion.choices[0].text
print(response)
