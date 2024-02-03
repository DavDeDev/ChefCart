interface Ingredients {
    name: string,
    ingredients: string[]
}

interface Instructions {
    name: string,
    ingredients: string[]
}

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
    ingredients: Ingredients,
    instructions: Instructions,
    additionals: Additionals,
}

interface Recipe {
    name: string,
    description: string,
    photo: string,
    info: Info,
    header: Headers,
}