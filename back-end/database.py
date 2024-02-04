from firebase_admin import db


import firebase_admin
import api_key
from firebase_admin import credentials
from firebase_admin import db

ref = db.reference("/some_resource")

recipes_ref = ref.child('recipes')
recipes_json = {
    'name': 'char siu',
    'description': 'Char siu, or Chinese BBQ Pork, is a delicious Cantonese roast meat. \
        Make authentic Chinatown char siu at home with our restaurant-quality recipe!',
    'photo': 'https://thewoksoflife.com/wp-content/uploads/2019/04/char-siu-recipe-11-340x226.jpg',
    'info': {
        'prep': '10 mins',
        'cook': '50 mins',
        'total': '1 hour',
    },
    'headers': {
        'ingredients': [
            '3 pounds boneless pork shoulder/pork butt (select a piece with some good fat on it)',
            '1/4 cup granulated white sugar',
            '2 teaspoons salt',
            '1/2 teaspoon five spice powder',
            '1/4 teaspoon white pepper',
            '1/2 teaspoon sesame oil',
            '1 tablespoon Shaoxing rice wine',
            '1 tablespoon soy sauce',
            '1 tablespoon hoisin sauce',
            '2 teaspoons molasses',
            '1/8 teaspoon red food coloring (optional)',
            '3 cloves finely minced garlic',
            '2 tablespoons maltose or honey',
            '1 tablespoon hot water',
        ],

        'instructions': [
            "Cut the pork into long strips or chunks about 2 to 3 inches thick. Don’t trim any excess fat, as it will render off and add flavor.", 
            "Combine the sugar, salt, five spice powder, white pepper, sesame oil, wine, soy sauce, hoisin sauce, molasses, food coloring (if using), and garlic in a bowl to make the marinade (i.e. the BBQ sauce).",
            "Reserve about 2 tablespoons of marinade and set it aside. Rub the pork with the rest of the marinade in a large bowl or baking dish. Cover and refrigerate overnight, or at least 8 hours. Cover and store the reserved marinade in the fridge as well.",
            "Preheat your oven to 'bake' at 475 F (246 C) with a rack positioned in the upper third of the oven. (If you only have a convection oven, keep in mind the oven not only heats more quickly, your char siu will roast faster than what we have described here).\
                It's amazing how oven temperatures can vary—from model to model, in different spots in the oven, and in how ovens pre-heat and maintain heat.  Using an oven thermometer to double-check the actual oven temperature is a great safeguard to monitor your food (I say double-check because even oven thermostat calibrations vary and can sometimes be incorrect).\
                Regardless, be sure to check your char siu every 10 minutes, reducing or increasing the temperature as needed.",
            "Line a sheet pan with foil and place a metal rack on top. Using the metal rack keeps the pork off of the pan and allows it to roast more evenly, like it does in commercial ovens described above. Place the pork on the rack, leaving as much space as possible between pieces. Pour 1 ½ cups water into the pan below the rack. This prevents any drippings from burning or smoking.",
            "Transfer the pork to your preheated oven. Roast for 25 minutes, keeping the oven setting at 475 F for the first 10 minutes of roasting, and then reduce your oven temperature to 375 F (190 C).\
                After 25 minutes, flip the pork. If the bottom of the pan is dry, add another cup of water. Turn the pan 180 degrees to ensure even roasting. Roast another 15 minutes. Throughout the roasting time, check your char siu often (every 10 minutes) and reduce the oven temperature if it looks like it is burning!",
            "Meanwhile, combine the reserved marinade with the maltose or honey (maltose is very viscous––you can heat it up in the microwave to make it easier to work with) and 1 tablespoon hot water. This will be the sauce you’ll use for basting the pork.",
            "After 40 minutes of total roasting time, baste the pork, flip it, and baste the other side as well. Roast for a final 10 minutes.",
            "By now, the pork has cooked for 50 minutes total. It should be cooked through and caramelized on top. If it’s not caramelized to your liking, you can turn the broiler on for a couple minutes to crisp the outside and add some color/flavor. Be sure not to walk away during this process, since the sweet char siu BBQ sauce can burn if left unattended. You can also use a meat thermometer to check if the internal temperature of the pork has reached 160 degrees F. (Update: USDA recommends that pork should be cooked to 145 degrees F with a 3 minute resting time)",
            "Remove from the oven and baste with the last bit of reserved BBQ sauce. Let the meat rest for 10 minutes before slicing, and enjoy!"
        ],

        'additionals': [{
            'name': 'notes',
            'content': [
                'Prep time does not include overnight marinating time.'
                ]
        }]
    }
}

caprese_json = {
    'name': 'caprese',
    'description': 'A good Caprese salad relies on good ingredients, so seek out the best tomatoes, \
        basil, and fresh mozzarella you can find to make this delicious summer salad.',
    'photo': 'https://cdn.loveandlemons.com/wp-content/uploads/2019/08/caprese-salad-recipe-1-1080x1080.jpg',
    'info': {
        'prep': '10 mins',
        'cook': '0 mins',
        'total': '10 mins',
    },
    'headers': {
        'ingredients': [
            '3 to 4 medium heirloom tomatoes, sliced',
            '1 (8-ounce) ball fresh mozzarella, sliced',
            'Fresh basil leaves',
            'Extra-virgin olive oil, for drizzling',
            'Flaky sea salt and freshly ground black pepper'
        ],

        'instructions': [
            "Arrange the tomatoes, mozzarella, and basil leaves on a platter. Drizzle with olive oil and sprinkle with sea salt and freshly ground black pepper."
            "If desired, add ingredients from the variations list."
        ],

        'additionals': [{
            'name': 'optional',
            'content': [
                'Drizzle of balsamic vinegar or reduced balsamic',
                'Dollops of pesto',
                'Sliced peaches',
                'Mint leaves',
                'Avocado slices',
                'Strawberries'
                ]
        }]
    }
}

json2 = {
    'name': 'Bún Thịt Nướng Recipe (Vietnamese Grilled Pork & Rice Noodles)',
    'description': 'Vietnamese bún thịt nướng is a delicious combination of grillled pork, noodles, veggies, and fish sauce.',
    'photo': 'https://www.hungryhuy.com/wp-content/uploads/bun-thit-nuong-v2-300x453@2x.jpg',
    'info': {
        'prep': '20 mins',
        'cook': '25 mins',
        'total': '45 mins',
    },
    'headers': {
        'ingredients': [
            '1.5 lb (680.4 g) pork shoulder sliced (any cut will do)',
            '1 package rice noodles small or medium thickness',
            '4-6 egg rolls optional',
            '3 tbsp shallots minced',
            '1.5 tbsp garlic minced',
            '1/4 cup sugar',
            '1 tbsp fish sauce',
            '1/2 tbsp thick soy sauce',
            '1/2 tbsp pepper',
            '3 tbsp neutral cooking oil',
            'green leaf lettuce',
            'mint rau thơm',
            'Vietnamese perilla tiá tô',
            'Vietnamese balm kinh giới',
            'cucumbers sliced',
            'pickled daikon and carrots (đồ chua)',
            '1/2 tbsp scallion in oil (mở hành)',
            '1/2 tbsp crushed peanuts',
            'prepared fish sauce'
        ],

        'instructions': [
            'Slice the uncooked pork thinly, about 1/8". It helps to slightly freeze it beforehand.',
            'Mince garlic and shallots. Mix in a bowl with sugar, fish sauce, thick soy sauce, pepper, and oil until sugar dissolves.',
            'Marinate the meat for 1 hour, or overnight for better results.',
            'Bake the pork at 375 F for 10-15 minutes or until about 80% cooked. Finish cooking by broiling in the oven until a nice golden brown color develops, flipping the pieces midway. Don\'t take your eyes off the broiler!',
            'Assemble your bowl with veggies, noodles, and garnish. Many like to mix the whole bowl up and pour the fish sauce on top, but I like to make individual bites and sauce it slowly.',
            "Arrange the tomatoes, mozzarella, and basil leaves on a platter. Drizzle with olive oil and sprinkle with sea salt and freshly ground black pepper.",
            "If desired, add ingredients from the variations list."
        ],

        'additionals': [{
            'name': 'Nutrition Facts (per serving)',
            'content': [
                'Serving: 0g | Calories: 215kcal | Carbohydrates: 15g | Protein: 21g | Fat: 7g | Saturated Fat: 3g | Cholesterol: 70mg | Sodium: 434mg | Potassium: 414mg | Fiber: 1g | Sugar: 13g | Vitamin C: 2mg | Calcium: 26mg | Iron: 1mg'
            ]
        }]
    }
}

json3 = {
    'name': 'Nasi Goreng (Indonesian Fried Rice)',
    'description': 'A traditional Indonesian fried rice recipe which is often served with a fried egg for a protein boost to make it a meal',
    'photo': 'https://www.recipetineats.com/wp-content/uploads/2016/03/Nasi-Goreng_1-1.jpg',
    'info': {
        'prep': '10 mins',
        'cook': '15 mins',
        'total': '25 mins',
    },
    'headers': {
        'ingredients': [
            '1 tbsp oil',
            '5 oz / 150g chicken breast , thinly sliced (or other protein)',
            '1 tbsp kecap manis (sweet soy sauce)',
            '1.5 tbsp oil',
            '2 garlic cloves , finely chopped',
            '1 tsp red chilli , finely chopped ',
            '1 onion , small, diced',
            '3 cups cooked white rice , day old, cold',
            '2 tbsp kecap manis (sweet soy sauce)',
            '2 tsp shrimp paste , optional',
            '4 eggs , fried to taste',
            '1 green onion , sliced',
            'Tomatos and cucumbers, cut into wedges/chunks'
            'Fried shallots , store bought (optional)',
            'Lime wedges'
        ],

        'instructions': [
            'Heat oil in a large skillet or wok over high heat.',
            'Add chilli and garlic, stir for 10 seconds.',
            'Add onion, cook for 1 minute.',
            'Add chicken, cook until it mostly turns white, then add 1 tbsp kecap manis and cook for a further 1 minute or until chicken is mostly cooked through and a bit caramelised.',
            'Add rice, 2 tbsp kecap manis and shrimp paste, if using. Cook, stirring constantly, for 2 minutes until sauce reduces down and rice grains start to caramelise (key for flavour!).',
            'Serve, garnished with garnishes of choice (green onions, red chilli, fried shallots).'
        ],

        'additionals': []
    }
}

json4 = {
    'name': 'Tiramisu',
    'description': 'Creamy, delicious and unbelievably EASY tiramisu recipe made with coffee soaked lady fingers, sweet and creamy mascarpone, and cocoa powder dusted on top.',
    'photo': 'https://tastesbetterfromscratch.com/wp-content/uploads/2017/04/Tiramisu-15-500x500.jpg',
    'info': {
        'prep': '10 mins',
        'cook': '10 mins',
        'total': '20 mins',
    },
    'headers': {
        'ingredients': [
            '1 1/2 cups heavy whipping cream',
            '8 ounce container mascarpone cheese ,room temperature',
            '1/3 cup granulated sugar',
            '1 teaspoon vanilla extract',
            '1 1/2 cups cold espresso',
            '3 Tablespoons coffee flavored liqueur ,optional (Kahlua or DaVinci brands)',
            '1 package Lady Fingers ,Savoiardi brand can be found in the cookie aisle at your local grocery store, or online',
            'Cocoa powder for dusting the top'
        ],

        'instructions': [
            'Add whipping cream to a mixing bowl and beat on medium speed with electric mixers (or use a stand mixer). Slowly add sugar and vanilla and continue to beat until stiff peaks. Add mascarpone cheese and fold in until combined. Set aside.',
            'Add coffee and liqueur to a shallow bowl. Dip the lady fingers in the coffee (Don\'t soak them--just quickly dip them on both sides to get them wet) and lay them in a single layer on the bottom of an 8x8'' or similar size pan.',
            'Smooth half of the mascarpone mixture over the top. Add another layer of dipped lady fingers. Smooth remaining mascarpone cream over the top.',
            'Dust cocoa powder generously over the top (I use a fine mesh strainer to do this). Refrigerate for at least 3-4 hours or up to overnight before serving.'
        ],

        'additionals': [{
            'name': 'Notes',
            'content': [
                'Alcohol: Tiramisu can be made with or without alcohol. This recipe calls for coffee flavored liqueur because I like that it enhances the coffee flavor, but other options are marsala wine or brandy.',
                'Make Ahead Instructions: Tiramisu is even better when made in advance, allowing the flavors to blend! It will keep in the refrigerator for 2 to 3 days.',
                'Freezing Instructions: Make completely, but don\'t dust with cocoa powder. Cover tightly with plastic wrap and then tinfoil and freeze for up to 3 months. Thaw in the refrigerator overnight and dust with cocoa powder a few hours before serving.'
            ]
        }]
    }
}

json5 = {
    'name': 'Easy Weeknight Spaghetti',
    'description': 'Our favorite weeknight friendly spaghetti recipe with a meat sauce that is made completely from scratch.',
    'photo': 'https://www.inspiredtaste.net/wp-content/uploads/2019/03/Spaghetti-with-Meat-Sauce-Recipe-1200.jpg',
    'info': {
        'prep': '5 mins',
        'cook': '40 mins',
        'total': '45 mins',
    },
    'headers': {
        'ingredients': [
            '1 pound lean ground meat like beef, turkey, chicken or lamb',
            '3 tablespoons olive oil',
            '1 cup (130 grams) chopped onion',
            '3 garlic cloves, minced (1 tablespoon)',
            '2 tablespoons tomato paste',
            '1/2 teaspoon dried oregano',
            'Pinch crushed red pepper flakes',
            '1 cup water, broth or dry red wine',
            '1 (28-ounce) can crushed tomatoes',
            'Salt and fresh ground black pepper',
            'Handful fresh basil leaves, plus more for serving',
            '12 ounces dried spaghetti or favorite pasta shape',
            '1/2 cup shredded parmesan cheese',
            '2 to 3 teaspoons fish sauce',
            '3 to 4 anchovy fillets, minced with some of their oil or use anchovy paste',
            'Pinch sugar',
            '1 leftover rind from a wedge of parmesan'
        ],

        'instructions': [
            'Heat the oil in a large pot over medium-high heat (we use a Dutch oven). Add the meat and cook until browned, about 8 minutes. As the meat cooks, use a wooden spoon to break it up into smaller crumbles.',
            'Add the onions and cook, stirring every once and a while, until softened, about 5 minutes.',
            'Stir in the garlic, tomato paste, oregano, and red pepper flakes and cook, stirring continuously for about 1 minute.',
            'Pour in the water and use a wooden spoon to scrape up any bits of meat or onion stuck to the bottom of the pot. Stir in the tomatoes, 3/4 teaspoon of salt, and a generous pinch of black pepper. Bring the sauce to a low simmer. Cook, uncovered, at a low simmer for 25 minutes. As it cooks, stir and taste the sauce a few times so you can adjust the seasoning accordingly (see notes for suggestions).',
            'About 15 minutes before the sauce finishes cooking, bring a large pot of salted water to the boil, and then cook pasta according to package directions, but check for doneness a minute or two before the suggested cooking time.',
            'Take the sauce off of the heat, and then stir in the basil. Toss in the cooked pasta, and then leave for a minute so that the pasta absorbs some of the sauce. Toss again, and then serve with parmesan sprinkled on top.'
        ],

        'additionals': []
    }
}

json6 = {
    'name': 'Simple Green Salad',
    'description': 'This simple green salad is light, refreshing, and delicious! It\'s a perfect side salad, as it pairs well with almost anything.',
    'photo': 'https://cdn.loveandlemons.com/wp-content/uploads/2021/04/green-salad-recipes.jpg',
    'info': {
        'prep': '15 mins',
        'cook': '14 mins',
        'total': '30 mins',
    },
    'headers': {
        'ingredients': [
            '2 small heads of soft lettuce, butter lettuce or similar',
            'Lemon Vinaigrette, half recipe',
            '1 Persian cucumber, thinly sliced',
            '¼ cup shaved Parmesan cheese',
            '2 tablespoons pepitas',
            '1 avocado, thinly sliced',
            '¼ cup microgreens',
            'Flaky sea salt, optional'
        ],

        'instructions': [
            'Roast the almonds: Preheat the oven to 350°F and line a baking sheet with parchment paper. Place the almonds on the sheet and toss with tamari. Bake for 10 to 14 minutes or until browned. Remove from the oven and let cool for 5 minutes.',
            'Assemble the salad. In a large bowl toss the lettuce with a few spoonfuls of the dressing. Add the cucumber, parmesan, pepitas, avocado, and tamari almonds. Drizzle with more dressing and top with microgreens. Season to taste with flaky sea salt, if desired.'
        ],

        'additionals': []
    }
}
recipes_ref.set({
    '0': recipes_json,
    '1': caprese_json,
    '2': json2,
    '3': json3,
    '4': json4,
    '5': json5,
    '6': json6,
})