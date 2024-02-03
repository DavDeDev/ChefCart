import { ScrollView, Text, Image, ImageBackground, Button, View, Icon, ChevronLeftIcon, ButtonText, HStack } from '@gluestack-ui/themed';
import {  Recipe, Headers, Info, Additionals } from './DataModel';
import { StyleSheet } from 'react-native';
import { useState } from 'react';

interface Props {
    recipe: Recipe
}

export default function RecipePage({ recipe }: Props) {
    return (
        <View style={styles.page}>
            <RecipeNav recipe={recipe}/>
            <ScrollView contentContainerStyle={styles.content}>
                <RecipeHeader recipe={recipe}/>

            </ScrollView>
        </View>
    )
}

function RecipeContent({ recipe }: Props) {
    
}

function RecipeHeader({ recipe }: Props) {
    return (
        <View style={{flex: 0, alignItems: 'center'}}>
            <View style={styles.recipeHeader}>
                <Image 
                    style={styles.foodPicture}
                    source="https://thewoksoflife.com/wp-content/uploads/2019/04/char-siu-recipe-14.jpg" alt="Image of the food"/>
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

function RecipeNav({ recipe }: Props) {
    const [isPressed, setIsPressed] = useState(false)
    const handleSave = () => {
        setIsPressed(true)
    }
    return (
        <View style={styles.navbar}>
            <Icon as={ChevronLeftIcon} size='xl'/>
            <Button size='md' style={{borderRadius: 100, backgroundColor: isPressed ? 'rgba(64, 64, 64, 0.7)' : '#404040'}}
                onPressIn={() => setIsPressed(true)}
                onPressOut={() => setIsPressed(false)}>
                <ButtonText> Save </ButtonText>
            </Button> 
        </View>
    )
}

const styles = StyleSheet.create({
    page: {
        height: '100%',
        width: '100%',
    },
    content: {
        height: '100%',
        width: '100%',
        backgroundColor: "#F0EAD6",
        flex: 1,
        flexDirection: "column",
        paddingVertical: 100,
        paddingHorizontal: 20,
        zIndex: 0,
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
        paddingHorizontal: 20,
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
        paddingHorizontal: 50
    },
    foodTitle: {
        width: '70%',
        height: 60,
        backgroundColor: 'rgba(249, 245, 237, 0.9)',
        flex: 0,
        justifyContent: 'center',
        top: 260,
        borderTopLeftRadius: 600,
        borderTopRightRadius: 600,
    }
})