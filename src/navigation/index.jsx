import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import SplashScreen from '../screens/SplashScreen';
import Home from '../screens/Home';
import 'react-native-gesture-handler';
import { TransitionSpecs } from '@react-navigation/stack';
import Login from '../screens/Login';

const Stack = createStackNavigator();

const Index = () => {
    const MyTransition = {
        gestureDirection: 'horizontal',
        transitionSpec: {
            open: TransitionSpecs.TransitionIOSSpec,
            close: TransitionSpecs.TransitionIOSSpec,
        },
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    };
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="SplashScreen"
                screenOptions={{
                    headerShown: false, // Hide the header by default
                    cardOverlayEnabled: true, // Enable the overlay effect
                    gestureEnabled: true, // Enable gestures for smoother transitions
                    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS, // Smooth horizontal transition
                }}>
                <Stack.Screen
                    name="SplashScreen"
                    component={SplashScreen}
                />
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{
                         ...MyTransition,
                        // headerShown: false,
                        // headerTitle: 'Home',
                    }}
                />
                <Stack.Screen
                    name="Login"
                    component={Login}
                    options={{
                         ...MyTransition,
                        // headerShown: false,
                        // headerTitle: 'Home',
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Index;

const styles = StyleSheet.create({});
