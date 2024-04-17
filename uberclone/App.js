import React from 'react';

import { StyleSheet,View,Text ,SafeAreaView} from 'react-native';
import { Provider } from 'react-redux';
import {store} from './store';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import HomeScreen from './screens/HomeScreen';
import MapScreen from './screens/MapScreen';

import NavOptions from './components/NavOptions';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

/* Stack */

const Stack = createNativeStackNavigator();

  export default function App() {
  return (

    <Provider store={store}>
       
     <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}/>
     

      
        <Stack.Screen name="MapScreen" component={MapScreen} />
     

      </Stack.Navigator>
    
  
</NavigationContainer>
   
  </Provider>
    
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
