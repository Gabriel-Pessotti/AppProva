/* eslint-disable no-unused-vars */
import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { View } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import Profile from "../pages/Profile";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator();


export default function Tabs () {
  return (
  <Tab.Navigator
  screenOptions={{
        tabBarActiveTintColor: '#7140FD',
        tabBarLabelStyle: { fontSize: 14 },
        tabBarShowLabel:false,

        tabBarStyle: {
          backgroundColor: '#F8F8F8',
          height: 75,
          borderTopColor: 'transparent',
        }
      }}
  >
    <Tab.Screen
      name="home"
      component={Home}
      options={{
        headerShown: false,
        tabBarIcon: ({ focused }) => (
          <View>
            { focused ? (
              <Ionicons
                name="home"
                size={24}
                color={focused ? '#7140FD' : '#f8f8f8'}
              />
            ) : (
              <Ionicons
                name="home-outline"
                size={24}
                color={focused ? '#a6a3a3' : '#a6a3a3'}
              />
            )}
          </View>
        ),
      }}
    />
    <Stack.Screen
    name="Cart"
    component={Cart}
      options={{
        headerShown: false,
        tabBarIcon: ({ focused }) => (
          <View>
            { focused ? (
              <Ionicons
                name="bag"
                size={24}
                color={focused ? '#7140FD' : '#f8f8f8'}
              />
            ) : (
              <Ionicons
                name="bag-outline"
                size={24}
                color={focused ? '#a6a3a3' : '#a6a3a3'}
              />
            )}
          </View>
        ),
      }}
    />


    <Stack.Screen
    name="Profile"
    component={Profile}
    options={{
      headerShown: false,
      tabBarIcon: ({ focused }) => (
        <View>
          { focused ? (
            <Ionicons
              name="person"
              size={24}
              color={focused ? '#7140FD' : '#f8f8f8'}
            />
          ) : (
            <Ionicons
              name="person-outline"
              size={24}
              color={focused ? '#a6a3a3' : '#a6a3a3'}
            />
          )}
        </View>
      ),
    }}
    />    


  </Tab.Navigator>
  )
}


