import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, } from 'react-native';
import Splash from './src/screens/auth/Splash';
import Signup from './src/screens/auth/Signup';
import Signin from './src/screens/auth/Signin';


const App = () => {
  return (
    <SafeAreaView>
      <View>
        <Signin/> 
      </View>
    </SafeAreaView>
  );
};
export default App;
