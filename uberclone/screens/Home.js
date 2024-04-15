import React from 'react'
import { StyleSheet, Text, View ,SafeViewArea } from 'react-native';

import tw from 'twrnc';
const Home =() => {
  return (
  <SafeViewArea style={tw `bg-white h-full`}>
<View style={tw`p-5`}>


<Text>red</Text>

</View>
  </SafeViewArea>
    
  );
};

export default Home;