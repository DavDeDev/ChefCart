import { config } from '@gluestack-ui/config';
import { GluestackUIProvider } from '@gluestack-ui/themed';
import RecipePage from './components/RecipePage';
import { exampleRecipe } from './components/DataModel';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  resetStorage()
  return (
    <GluestackUIProvider config={config}>
      <RecipePage recipe={exampleRecipe}/>
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