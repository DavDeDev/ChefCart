import os
import sys

# Ensure all required environment variables are set

# def api_key():
#     try:  
#         key = os.environ['GOOGLE_APPLICATION_CREDENTIALS']
#         return key
#     except KeyError: 
#         print('[error]: `GOOGLE_APPLICATION_CREDENTIALS` environment variable required')
#         sys.exit(1)

def api_key():
    key = "api_keys/chefcart-4f2c4-firebase-adminsdk-lk740-9d0932a6a9.json"
    return key