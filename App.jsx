import React from 'react';
import Routes from './src/routes';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {ThemeProvider} from 'styled-components/native';
import {colors} from './src/components/Theme/colors';
import AuthProvider, { CategoryProvider } from './src/hook';

export default function App() {
  return (
    <AuthProvider>
      <ThemeProvider theme={colors}>
        <NavigationContainer>
          <CategoryProvider>
          <StatusBar
            backgroundColor="transparent"
            barStyle="dark-content"
            translucent={true}
          />
          <Routes />
          </CategoryProvider>
        </NavigationContainer>
      </ThemeProvider>
    </AuthProvider>
  );
}
