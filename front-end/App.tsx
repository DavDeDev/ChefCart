import { config } from '@gluestack-ui/config';
import { GluestackUIProvider } from '@gluestack-ui/themed';
import RecipePage from './components/RecipePage';
import { exampleRecipe } from './components/DataModel';

export default function App() {
  return (
    <GluestackUIProvider config={config}>
      <RecipePage recipe={exampleRecipe}/>
    </GluestackUIProvider>
  );
}