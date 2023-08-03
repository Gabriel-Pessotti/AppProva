import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../pages/Login';
import SignIn from '../pages/SignIn';
import Tabs from './tabs';
import Search from '../pages/Search';
import Detail from '../pages/Detail';
import BastSaller from '../pages/BastSaller';


const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator initialRouteName="">
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Home"
        component={Tabs}
        options={{headerShown: false}}
      />
       <Stack.Screen
        name="Search"
        component={Search}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Detail"
        component={Detail}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="BastSaller"
        component={BastSaller}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
