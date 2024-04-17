import { StyleSheet, Text, View,SafeAreaView,Image } from 'react-native';
import React from 'react';
import  tw from'twrnc'
import NavOptions from '../components/NavOptions';

const HomeScreen = () => {
  return (
    
    <SafeAreaView style={tw`bg-blue-100  h-full`}>
     <View style={tw`p-5 `}>
        <Image style={{
            width:100,
            height:100,
            resizeMode:"contain"
        
    }}
        source={{
            uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7j1-eX3TcYcPTpn1A85QCIWP-ncJ9aErWqB6ydfLulg&s "
        }}
        
        />
       <NavOptions/>
     </View>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    text:{
        color:'blue', 
    }
})