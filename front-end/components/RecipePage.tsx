import { ScrollView, Text, Image, ImageBackground, Button, View, Icon, ChevronLeftIcon, ButtonText, HStack, createIcon, ButtonIcon } from '@gluestack-ui/themed';
import {  Recipe, Headers, Info, Additionals, RecipeProps, exampleGrocery, Grocery } from './DataModel';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StyleSheet } from 'react-native';
import { Path, Circle } from 'react-native-svg';
import { useState } from 'react';

interface Props {
    recipe: Recipe
}

interface EntryProps {
    heading: string,
    content: string[],
    isNumbered: boolean
}

export default function RecipePage(navProps: RecipeProps) {
    const {route, navigation} = navProps
    const recipe = route.params.recipe
    const cartIcon = createIcon({
        viewBox: "0 0 24 24",
        path: (
            <>
                <Path d="M4 4H5.62563C6.193 4 6.47669 4 6.70214 4.12433C6.79511 4.17561 6.87933 4.24136 6.95162 4.31912C7.12692 4.50769 7.19573 4.7829 7.33333 5.33333L7.51493 6.05972C7.616 6.46402 7.66654 6.66617 7.74455 6.83576C8.01534 7.42449 8.5546 7.84553 9.19144 7.96546C9.37488 8 9.58326 8 10 8V8" stroke="rgba(249, 245, 237, 0.8)" stroke-width="2" stroke-linecap="round"/>
                <Path d="M18 17H7.55091C7.40471 17 7.33162 17 7.27616 16.9938C6.68857 16.928 6.28605 16.3695 6.40945 15.7913C6.42109 15.7367 6.44421 15.6674 6.49044 15.5287V15.5287C6.54177 15.3747 6.56743 15.2977 6.59579 15.2298C6.88607 14.5342 7.54277 14.0608 8.29448 14.0054C8.3679 14 8.44906 14 8.61137 14H14" stroke="rgba(249, 245, 237, 0.8)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <Path d="M15.7639 14H9.69425C8.71658 14 7.8822 13.2932 7.72147 12.3288L7.2911 9.7466C7.13872 8.8323 7.84378 8 8.77069 8H18.382C19.1253 8 19.6088 8.78231 19.2764 9.44721L17.5528 12.8944C17.214 13.572 16.5215 14 15.7639 14Z" stroke="rgba(249, 245, 237, 0.8)" stroke-width="2" stroke-linecap="round"/>
                <Circle cx="17" cy="20" r="1" fill="rgba(249, 245, 237, 0.8)"/>
                <Circle cx="9" cy="20" r="1" fill="rgba(249, 245, 237, 0.8)"/>
            </>
        )
    })
    const handleCartButton = async () => {
        let numRecipes = await AsyncStorage.getItem('NumRecipe')
        if (numRecipes === null)
            return;
        let recipes: Recipe[] = []
        let groceries: Grocery[] = [];
        for (let i = 0; i < parseInt(numRecipes); i++) {
            let cached = await AsyncStorage.getItem(''+i)
            if (cached === null)
                continue;
            recipes.push(JSON.parse(cached))
        }

        let res = await fetch("http://35.153.180.4/grocery", {
            method: "POST",
            body: JSON.stringify(recipes),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }) 
        
        let resJson = await res.json()
        navigation.navigate('GroceryPage', { grocery: resJson})
    }

    return (
        <View style={styles.page}>
            <RecipeNav {...navProps}/>

            <ScrollView>
                <RecipeHeader recipe={recipe}/>
                <RecipeContent recipe={recipe}/>
            </ScrollView>

            <Button style={styles.cartButton} onPress={handleCartButton}>
                <Icon as={cartIcon} style={{width: 50, height: 50}}/>
            </Button>
        </View>
    )
}

function RecipeContent({ recipe }: Props) {
    return (
        <View style={{width: '100%', flex: 0, alignItems: 'center'}}>
            <View style={styles.recipeContent}>
                <RecipeEntry 
                    heading="Ingredients"
                    content={recipe.headers.ingredients}
                    isNumbered={true}/>
                <RecipeEntry 
                    heading="Instructions" 
                    content={recipe.headers.instructions}
                    isNumbered={false}
                />
            </View>
        </View>
    ) 
}

function RecipeEntry({ heading, content, isNumbered }: EntryProps) {
    return (
            <View style={{paddingHorizontal: 6, paddingVertical: 8}}>
                <Text style={styles.recipeHeadding}> { heading } </Text>
                {content.map((point, i) => {
                    return(
                        <Text 
                            key={`${heading} ${i}`}
                            style={styles.recipeParagraph}
                        >
                            <Text style={{fontSize:17, fontWeight:'bold'}}>{isNumbered ? `${i+1}.` : `\u2022`}</Text> {point}
                        </Text>
                    )
                })}
            </View>
    )
}

function RecipeHeader({ recipe }: Props) {
    return (
        <View style={{flex: 0, alignItems: 'center'}}>
            <View style={styles.recipeHeader}>
                <Image 
                    style={styles.foodPicture}
                    source={recipe.photo} alt="Image of the food"/>
                <View style={styles.foodInfo}>
                    <Text> 
                        <Text style={{fontWeight: "bold"}}>Prep:</Text> 
                        {recipe.info.prep} 
                    </Text>
                    <Text> 
                        <Text style={{fontWeight: "bold"}}>Cook:</Text> 
                        {recipe.info.cook}
                    </Text>
                    <Text> 
                        <Text style={{fontWeight: "bold"}}>Total:</Text> 
                        {recipe.info.total} 
                    </Text>
                </View>
            </View>
            <View style={styles.foodTitle}>

                <Text style={{textAlign: 'center', fontSize: 25, lineHeight: 25, fontWeight: 'bold'}}>{recipe.name}</Text>
            </View>
        </View>
    )
}

function RecipeNav({ route, navigation }: RecipeProps) {
    const recipe = route.params.recipe
    const [isPressed, setIsPressed] = useState(false)
    const [hasSaved, setHasSaved] = useState(false)
    const handleSave = async () => {
        let currNumRecipe = await AsyncStorage.getItem('NumRecipe')
        if (currNumRecipe === null || hasSaved)
            return;

        await AsyncStorage.setItem('NumRecipe', '' + (parseInt(currNumRecipe) + 1))
        await AsyncStorage.setItem(currNumRecipe, JSON.stringify(recipe))
        setHasSaved(true)
    }

    return (
        <View style={styles.navbar}>
            <Button style={{backgroundColor: 'rgba(255,255,255,0)'}}
                onPress={() => navigation.goBack()}>
                <ButtonIcon as={ChevronLeftIcon} size='xl' color='black'/>
            </Button>
            <Button size='md' style={{borderRadius: 100, backgroundColor: isPressed ? 'rgba(64, 64, 64, 0.7)' : '#404040'}}
                onPressIn={() => setIsPressed(true)}
                onPress={handleSave}
                onPressOut={() => setIsPressed(false)}>
                <ButtonText> Save </ButtonText>
            </Button> 
        </View>
    )
}

const styles = StyleSheet.create({
    page: {
        width: '100%',
        height: '100%',
        backgroundColor: "#F0EAD6",
        flex: 1,
        flexDirection: "column",
        zIndex: 0,
        paddingTop: 80,
        paddingHorizontal: 10,
        paddingBottom: 40
    },
    navbar: {
        width: '100%',
        flex: 0,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 50,
        position: 'absolute',
        top: 60,
        zIndex: 1,
    },
    recipeHeader: {
        flex: 1,
        flexDirection: "column",
        width: '100%',
        alignItems: "center",
        paddingHorizontal: 10,
    },
    foodPicture: {
        height: 300,
        width: '100%',
        borderTopLeftRadius: 500,
        borderTopRightRadius: 500,
        borderWidth: 5,
        borderColor: '#F9F5ED',
    },
    foodInfo: {
        width: '100%',
        height: 60,
        overflow: 'hidden',
        backgroundColor:  'rgba(249, 245, 237, 0.8)',
        textAlign: 'center',
        flex: 0,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 14,
        paddingHorizontal: 50,
        marginBottom: 20
    },
    foodTitle: {
        width: '70%',
        height: 60,
        backgroundColor: 'rgba(249, 245, 237, 0.9)',
        flex: 0,
        justifyContent: 'center',
        top: 250,
        position: 'absolute',
        borderTopLeftRadius: 600,
        borderTopRightRadius: 600,
    },
    recipeContent: {
        backgroundColor: 'rgba(249, 245, 237, 0.8)',
        width: '95%',
    },
    recipeHeadding: {
        fontWeight: 'bold',
        fontSize: 20
    },
    recipeParagraph: {
        fontSize: 16,
        paddingLeft: 12
    },
    cartButton: {
        width: 65,
        height: 65,
        position: 'absolute',
        top: 800,
        left: '85%',
        borderRadius: 1000,
        backgroundColor: 'rgba(0,0,0,0.7)',
        borderColor: 'rgba(249, 245, 237, 0.8)',
        borderWidth: 2,
    }
})