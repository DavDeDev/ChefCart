import { config } from '@gluestack-ui/config';
import { GluestackUIProvider } from '@gluestack-ui/themed';
import RecipePage from './components/RecipePage';
import GroceryPage from './components/GroceryPage';
import { exampleRecipe, StackParamList } from './components/DataModel';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomePage from './components/HomePage';

const Stack = createNativeStackNavigator<StackParamList>();

export default function App() {
  resetStorage()
  return (
    <GluestackUIProvider config={config}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='HomePage' screenOptions={{headerShown: false}}>
          <Stack.Screen name="HomePage" component={HomePage}/>
          <Stack.Screen name="RecipePage" component={RecipePage}/>
          <Stack.Screen name="GroceryPage" component={GroceryPage}/>
        </Stack.Navigator>
      </NavigationContainer>
    </GluestackUIProvider>
  );
}

async function resetStorage() {
    let res = await AsyncStorage.getItem('NumRecipe')
    if (res !== null) {
      for (let index = 0; index < parseInt(res); index++) {
        await AsyncStorage.removeItem(index.toString())
      }
    }
    await AsyncStorage.setItem('NumRecipe', '0')
    console.log("Done resetting")
}