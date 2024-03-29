import type { NativeStackScreenProps } from '@react-navigation/native-stack';
interface Additionals {
    name: string,
    content: string[]
}

interface Info {
    prep: string,
    cook: string,
    total: string,
}

interface Headers {
    ingredients: string[],
    instructions: string[],
    additionals: Additionals[],
}

interface Recipe {
    name: string,
    description: string,
    photo: string,
    info: Info,
    headers: Headers,
}

interface Grocery {
    content: string[],
    price: string
}

type StackParamList = {
  HomePage: undefined,
  RecipePage: { recipe: Recipe },
  GroceryPage: { grocery: Grocery }
};
type HomeProps = NativeStackScreenProps<StackParamList, 'HomePage'>;
type RecipeProps = NativeStackScreenProps<StackParamList, 'RecipePage'>;
type GroceryProps = NativeStackScreenProps<StackParamList, 'GroceryPage'>;

let exampleRecipe: Recipe = {
    name: "Char Siu",
    description: "Char siu, or Chinese BBQ Pork, is a delicious Cantonese roast meat. Make authentic Chinatown char siu at home with our restaurant-quality recipe!",
    photo: "https://thewoksoflife.com/wp-content/uploads/2019/04/char-siu-recipe-14.jpg",
    info: { prep: "10 mins", cook: "50 mins", total: "1 hour"},
    headers: {
        ingredients: 
        [
            '3 pounds boneless pork shoulder/pork butt (select a piece with some good fat on it)', '¼ cup granulated white sugar', '2 teaspoons salt', '½ teaspoon five spice powder', '¼ teaspoon white pepper', '½ teaspoon sesame oil', '1 tablespoon Shaoxing rice wine', '1 tablespoon soy sauce', '1 tablespoon hoisin sauce', '2 teaspoons molasses', '1/8 teaspoon red food coloring (optional)', '3 cloves finely minced garlic', '2 tablespoons maltose or honey', '1 tablespoon hot water'
        ],

        instructions: 
        [
            "Cut the pork into long strips or chunks about 2 to 3 inches thick. Don’t trim any excess fat, as it will render off and add flavor.", 
            "Combine the sugar, salt, five spice powder, white pepper, sesame oil, wine, soy sauce, hoisin sauce, molasses, food coloring (if using), and garlic in a bowl to make the marinade (i.e. the BBQ sauce).",
            "Reserve about 2 tablespoons of marinade and set it aside. Rub the pork with the rest of the marinade in a large bowl or baking dish. Cover and refrigerate overnight, or at least 8 hours. Cover and store the reserved marinade in the fridge as well.",
            "Preheat your oven to 'bake' at 475 F (246 C) with a rack positioned in the upper third of the oven. (If you only have a convection oven, keep in mind the oven not only heats more quickly, your char siu will roast faster than what we have described here).\n\
            It's amazing how oven temperatures can vary—from model to model, in different spots in the oven, and in how ovens pre-heat and maintain heat.  Using an oven thermometer to double-check the actual oven temperature is a great safeguard to monitor your food (I say double-check because even oven thermostat calibrations vary and can sometimes be incorrect).\n\
            Regardless, be sure to check your char siu every 10 minutes, reducing or increasing the temperature as needed.",
            "Line a sheet pan with foil and place a metal rack on top. Using the metal rack keeps the pork off of the pan and allows it to roast more evenly, like it does in commercial ovens described above. Place the pork on the rack, leaving as much space as possible between pieces. Pour 1 ½ cups water into the pan below the rack. This prevents any drippings from burning or smoking.",
            "Transfer the pork to your preheated oven. Roast for 25 minutes, keeping the oven setting at 475 F for the first 10 minutes of roasting, and then reduce your oven temperature to 375 F (190 C).\n\
            After 25 minutes, flip the pork. If the bottom of the pan is dry, add another cup of water. Turn the pan 180 degrees to ensure even roasting. Roast another 15 minutes. Throughout the roasting time, check your char siu often (every 10 minutes) and reduce the oven temperature if it looks like it is burning!",
            "Meanwhile, combine the reserved marinade with the maltose or honey (maltose is very viscous––you can heat it up in the microwave to make it easier to work with) and 1 tablespoon hot water. This will be the sauce you’ll use for basting the pork.",
            "After 40 minutes of total roasting time, baste the pork, flip it, and baste the other side as well. Roast for a final 10 minutes.",
            "By now, the pork has cooked for 50 minutes total. It should be cooked through and caramelized on top. If it’s not caramelized to your liking, you can turn the broiler on for a couple minutes to crisp the outside and add some color/flavor. Be sure not to walk away during this process, since the sweet char siu BBQ sauce can burn if left unattended. You can also use a meat thermometer to check if the internal temperature of the pork has reached 160 degrees F. (Update: USDA recommends that pork should be cooked to 145 degrees F with a 3 minute resting time)",
            "Remove from the oven and baste with the last bit of reserved BBQ sauce. Let the meat rest for 10 minutes before slicing, and enjoy!"
        ],
        additionals: []
    }
}

let exampleGrocery: Grocery = {
    content: [
        "3 pounds boneless pork shoulder/pork butt",
        "Granulated white sugar",
        "Salt",
        "Five spice powder",
        "White pepper",
        "Sesame oil",
        "Shaoxing rice wine",
        "Soy sauce",
        "Hoisin sauce",
        "Molasses",
        "Red food coloring (optional)",
        "Cloves of garlic",
        "Maltose or honey"
    ],
    price: "$20"
}

export type { Recipe, Headers, Info, Additionals, Grocery, RecipeProps, GroceryProps, HomeProps, StackParamList };
export { exampleRecipe, exampleGrocery };