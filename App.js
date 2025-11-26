import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Personagem from './src/telas/Personagem';
import Informacoes from './src/telas/Informacoes';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator nitialRouteName='Personagem'>
        <Stack.Screen name="Personagem" component={Personagem} options={{headerStyle:{backgroundColor: '#242424'}, headerTintColor: '#42b4ca'}} />
        <Stack.Screen name="Informacoes" component={Informacoes} />
      </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
