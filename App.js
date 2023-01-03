import React from 'react';
import {Text, View, SafeAreaView, StyleSheet, StatusBar} from 'react-native';
import 'react-native-gesture-handler';
import AppNavContainer from './src/Navigations';
import GlobalProvider from './src/Context/Provider';

const App = () => {
  return (
    <GlobalProvider>
      <AppNavContainer></AppNavContainer>
    </GlobalProvider>
  );
};

export default App;
