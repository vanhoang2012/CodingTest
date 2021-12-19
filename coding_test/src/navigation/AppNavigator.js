import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import HomeScreen from '../screens/homeScreen';
import LoginScreen from '../screens/loginScreen';
import SplashScreenComponent from '../screens/splashScreen';
import {navigationRef} from './NavigationService';
import RouteKey from './RouteKey';

const AuthStackNavigator = createStackNavigator();
const MainStackNavigator = createStackNavigator();
const AppStackNavigator = createStackNavigator();

function AuthStackNavigation() {
  return (
    <AuthStackNavigator.Navigator
      headerMode={'none'}
      screenOptions={{gestureEnabled: true}}>
      <AuthStackNavigator.Screen
        name={RouteKey.LoginScreen}
        component={LoginScreen}
      />
    </AuthStackNavigator.Navigator>
  );
}

function MainStackNavigation() {
  return (
    <MainStackNavigator.Navigator
      headerMode={'none'}
      screenOptions={{gestureEnabled: true}}>
      <MainStackNavigator.Screen
        name={RouteKey.HomeScreen}
        component={HomeScreen}
      />
    </MainStackNavigator.Navigator>
  );
}

function AppNavigation() {
  return (
    <NavigationContainer ref={navigationRef}>
      <AppStackNavigator.Navigator
        headerMode={'none'}
        screenOptions={{gestureEnabled: true}}>
        <AppStackNavigator.Screen
          name={RouteKey.SplashScreen}
          component={SplashScreenComponent}
        />
        <AppStackNavigator.Screen
          name={RouteKey.MainStackNavigation}
          component={MainStackNavigation}
        />
        <AppStackNavigator.Screen
          name={RouteKey.AuthStackNavigation}
          component={AuthStackNavigation}
        />
      </AppStackNavigator.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;
