import 'react-native-gesture-handler';
import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { StyleSheet, Text, View, BackHandler, TabBarIOS } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator, BottomTabBar, BottomTabView } from '@react-navigation/bottom-tabs';

import Login from './components/component-login';
import SignUp from './components/component-DK';
import Menu from './components/componentMenu';
import TShirt from './components/compnent-tshirt';
import Pant from './components/component-pant';
import Jacket from './components/component-jacket';
import Sneaker from './components/component-sneaker';
import Accessories from './components/component-PK';
import myCart from './components/component-cart';
import Settings from './components/component-settings';
import Order from './components/component-order';
import Account from './components/componentAccount';
import Update from './components/componentUpdate';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


class Stacks extends Component {
  render() {
    return(
      <Stack.Navigator initialRouteName="Menu">

        <Stack.Screen  name="Menu" component={Menu} options={
          { title: "PRODUCT MENU", headerBackTitle: "Back", headerLeft: null }
        }/>
        <Stack.Screen  name="TShirt" component={TShirt} options={
          { title: "PRODUCT T-SHIRT", headerBackTitle: "Back" }
        }/>
        <Stack.Screen  name="Pant" component={Pant} options={
          { title: "PRODUCT PANT", headerBackTitle: "Back" }
        }/>
        <Stack.Screen  name="Jacket" component={Jacket} options={
          { title: "PRODUCT JACKET", headerBackTitle: "Back" }
        }/>
        <Stack.Screen  name="Sneakers" component={Sneaker} options={
          { title: "PRODUCT SNEAKER", headerBackTitle: "Back" }
        }/>
        <Stack.Screen name="Accessories" component={Accessories} options={
          { title: "PRODUCT ACCESSORIES", headerBackTitle: "Back" } 
        }/>
        <Stack.Screen name="Product Order" component={Order} options={
          { title: "PRODUCT ORDER", headerBackTitle: "Back" }
        }/>
      </Stack.Navigator>
    );
  }
}

class StackMyCart extends Component {
  render() {
    return(
      <Stack.Navigator>
        <Stack.Screen name="My Cart" component={myCart} options={
          { headerBackTitle: "Back" } 
        }/>
      </Stack.Navigator>
    );
  }
}

class StackSettings extends Component {
  render() {
    return(
      <Stack.Navigator>
        <Stack.Screen name="Settings" component={Settings} options={
          { headerBackTitle: "Back" } 
        }/>
        <Stack.Screen name="Account" component={Account} options={
          { headerBackTitle: "Back" } 
        }/>
        <Stack.Screen name="Update Account" component={Update} options={
          { headerBackTitle: "Back" } 
        }/>
      </Stack.Navigator>
    );
  }
}

class Tabnavigation extends Component {
  render() {
    return(
      <Tab.Navigator screenOptions={ ({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if(route.name === 'Home') {
            iconName = focused ? 'ios-menu' : 'ios-menu';
          }
          else if(route.name === 'My Cart') {
            iconName = focused ? 'ios-cart' : 'ios-cart';
          }
          else if(route.name === 'Settings') {
            iconName = focused ? 'ios-settings' : 'ios-settings';
          }

          return <Icon name={iconName} size={size} color={color}/>
        }
      })}
        tabBarOptions={{
          activeTintColor: 'black',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Home" component={Stacks}/>
        <Tab.Screen name="My Cart" component={StackMyCart}/>
        <Tab.Screen name="Settings" component={StackSettings }/>
      </Tab.Navigator>
    );
  }
}

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Login" component={Login} options={
              { headerBackTitle: "Back" }
            }/>
            <Stack.Screen name="Sign Up" component={SignUp} options={
              { headerBackTitle: "Back" } 
            }/>
            <Stack.Screen name="Last" component={Tabnavigation} options={
              {headerShown: false}
            }/>
          </Stack.Navigator>
        </NavigationContainer>
    );
  }
}
