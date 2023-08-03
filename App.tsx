import React from 'react';
import Routes from './src/routes';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { ThemeProvider } from 'styled-components/native';
import { colors } from './src/components/theme/colors';


export default function App() {
  return (
<ThemeProvider theme={colors}>
    <NavigationContainer>
      <StatusBar
        backgroundColor="transparent" 
        barStyle="dark-content"
         translucent={true} 
      />
      <Routes />
    </NavigationContainer>
    </ThemeProvider>
  );
}
