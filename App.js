import './polyfills'
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'; 
import Constants from "expo-constants"
import DrawerNavigator from './components/navigation/DrawerNavigator'; 

export default function App() {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>

  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
