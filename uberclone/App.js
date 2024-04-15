import React from 'react';

import { StyleSheet,View,Text ,SafeAreaView} from 'react-native';
import { Provider } from 'react-redux';
import {store} from './store';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import HomeScreen from './screens/HomeScreen';
import NavOptions from './components/NavOptions';




  export default function App() {
  return (

    <Provider store={store}>
      <SafeAreaProvider>

      <HomeScreen/>
      </SafeAreaProvider>
  
     
   
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
