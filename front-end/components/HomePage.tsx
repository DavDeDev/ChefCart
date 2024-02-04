import { HStack, ScrollView, Text, VStack, View, Image, createIcon, Icon } from "@gluestack-ui/themed";
import { StyleSheet, FlatList, Pressable } from 'react-native';
import { HomeProps, Recipe, exampleRecipe, StackParamList } from './DataModel';
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Path } from "react-native-svg";

export default function HomePage({route, navigation}: HomeProps) {
    const [recipes, setRecipes] = useState<Recipe[]>([])
    const [leftRecipes, setLeftRecipes] = useState<Recipe[]>([])
    const [rightRecipes, setRightRecipes] = useState<Recipe[]>([])
    useEffect(() => {
        console.log("Initial data fetching!")
        getRecipes(setRecipes)
    }, [])
    useEffect(() => {
        setLeftRecipes(recipes.slice(recipes.length / 2))
        setRightRecipes(recipes.slice(recipes.length / 2, recipes.length))
    }, [recipes])

    const logo = createIcon({
        viewBox: "0 0 24 24",
        path: (
            <>
                <Path d="M6.50002 16L8.83426 16.7182C10.9043 17.3552 13 15.8073 13 13.6415C13 9.2432 18 10 18 5C18 5 7.50003 5 6.16461 15.9114L6.50002 16Z" fill="#7E869E" fill-opacity="0.25"/>
                <Path d="M6.5 21.5L6.17696 17.9466C5.54494 10.9943 11.019 5 18 5V5" stroke="#222222"/>
            </>
        )
    })
    
    return (
        <View style={styles.page}>
            <Icon as={logo} style={{ width: 50, height: 50, marginBottom: 10 }}/>
            <ScrollView style={{width: '100%'}}>
                <View style={styles.row}>
                    <View style={styles.col}>
                        {leftRecipes.map((recipe, i) => 
                            (<Post recipe={recipe} key={'left' + i + recipe.name}/>))} 
                    </View>
                    <View style={styles.col}>
                        {rightRecipes.map((recipe, i) => 
                        (<Post recipe={recipe} key={'right' + i + recipe.name} />))} 
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

interface PostProps {
    recipe: Recipe,
    key: string
}

function Post({recipe, key}: PostProps) {
    const navigation = useNavigation()
    return(
        <Pressable onPress={() => navigation.navigate("RecipePage", {recipe: recipe})}>
            <View style={{flex: 0, marginHorizontal: 4}}>
                <Image style={styles.post} key={key} source={recipe.photo} alt={recipe.name} 
                    height={Math.random() * (250 - 160) + 160}/>
                <Text style={{fontWeight: "bold", fontSize: 12}}> {recipe.name} </Text>
            </View>
        </Pressable>
    )
}

async function getRecipes(callback: React.Dispatch<React.SetStateAction<Recipe[]>>) {
    let recipes = []
    for (let i = 0; i < 20; i++) {
        recipes.push(exampleRecipe);
    }
    callback(recipes)
}

const styles = StyleSheet.create({
    page: {
        width: '100%',
        height: '100%',
        backgroundColor: "#F0EAD6",
        flex: 1,
        flexDirection: "column",
        alignItems: 'center',
        zIndex: 0,
        paddingTop: 60,
        paddingHorizontal: 10,
        paddingBottom: 40
    },
    row: {
        width: '100%',
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 15
    },
    col: {
        flex: 0,
        flexDirection: 'column',
        gap: 12
    },
    post: {
        width: 170,
        borderRadius: 20
    }
})