import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/Home/Homescreen';

const Stack = createStackNavigator();

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
          />
         
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}