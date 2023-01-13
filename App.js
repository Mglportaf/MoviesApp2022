import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigation from './components/MainNavigation';


const App = () => {
  return (
    <NavigationContainer>
      <MainNavigation/>
    </NavigationContainer>
/*     <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Home></Home>
    </View> */
  );
};

export default App;