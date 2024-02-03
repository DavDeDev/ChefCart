import firebase_admin
import api_key
from firebase_admin import credentials
from firebase_admin import db

cred = credentials.Certificate(api_key.api_key())

default_app = firebase_admin.initialize_app(cred, {
    'databaseURL': 'https://chefcart-4f2c4-default-rtdb.firebaseio.com/'
})

ref = db.reference("/")
print(ref.get())


# recipes_ref = ref.child('recipes')
# recipes_ref.set({
#     'recipe': {
#         'date_of_birth': 'June 23, 1912',
#         'full_name': 'Alan Turing'
#     },
#     'gracehop': {
#         'date_of_birth': 'December 9, 1906',
#         'full_name': 'Grace Hopper'
#     }
# })
