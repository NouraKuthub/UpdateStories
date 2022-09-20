import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Home from "./src/Home";
import Stories from "./src/Stories";

const Stack = createNativeStackNavigator();

 function Router() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Stories" component={Stories} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Router;