import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './Screens/WelcomeScreen';
import GetStartedScreen from './Screens/GetStartedScreen';
import RegisterScreen from './Screens/RegisterScreen';
import LoginScreen from './Screens/LoginScreen';

const Stack = createStackNavigator();

const Navigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={WelcomeScreen} >
                <Stack.Screen name="Welcome" component={WelcomeScreen} options={
                {
                    headerShown: false
                }
            } />
                <Stack.Screen name="GetStarted" component={GetStartedScreen} options={
                {
                    headerShown: false
                }
            } />
                <Stack.Screen name="Register" component={RegisterScreen} options={
                {
                    title: 'Register',
                    headerStyle: {
                        backgroundColor: '#f75555',
                        height: 120,
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold'
                    },
                    headerTitleAlign: 'center',
                }
                } />
                <Stack.Screen name="Login" component={LoginScreen} options={
                {
                    title: 'Sign In',
                    headerStyle: {
                        backgroundColor: '#f75555',
                        height: 120,
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold'
                    },
                    headerTitleAlign: 'center',
                }
                } />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigator

const styles = StyleSheet.create({})
