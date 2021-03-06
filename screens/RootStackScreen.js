import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import SplashScreen from './SplashScreen';
import SignInScreen from './SignInScreen';
import SignUpScreen from './SignUpScreen';
import NavScreen from './NavScreen';
import MobileVeryScreen from './MobileVeryScreen';
import SignInCustomerScreen from './SignInCustomerScreen';
import SignUpCustomerScreen from './SignUpCustomerScreen';
const RootStack = createStackNavigator();

const RootStackScreen = ({navigation}) => (
  <RootStack.Navigator headerMode="none">
    <RootStack.Screen name="SplashScreen" component={SplashScreen} />
    <RootStack.Screen name="NavScreen" component={NavScreen} />
    <RootStack.Screen name="MobileVeryScreen" component={MobileVeryScreen} />
    <RootStack.Screen name="SignInScreen" component={SignInScreen} />
    <RootStack.Screen name="SignUpScreen" component={SignUpScreen} />
    <RootStack.Screen name="SignInCustomerScreen" component={SignInCustomerScreen} />
    <RootStack.Screen name="SignUpCustomerScreen" component={SignUpCustomerScreen} />
  </RootStack.Navigator>
);

export default RootStackScreen;
