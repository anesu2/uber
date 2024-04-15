import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import {store} from './store';
import {Home} from './screens/Home';



export default function App() {
  return (

    <Provider store={store}>

      

           <Home/>
           
           <StatusBar style="auto" />
      
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
