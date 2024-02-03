import os
import sys

# Ensure all required environment variables are set

def api_key():
    try:  
        key = os.environ['GOOGLE_APPLICATION_CREDENTIALS']
        return key
    except KeyError: 
        print('[error]: `GOOGLE_APPLICATION_CREDENTIALS` environment variable required')
        sys.exit(1)