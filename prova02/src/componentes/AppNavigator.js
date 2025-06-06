import React from "react";
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import FormSreen from "./FormScreen";
import ListScreen from "./ListScreen";s
import LoginScreen from "./LoginScreen";
import RegisterScreen from "./RegisterScreen";

const Stack = createNativeStackNavigator();

export default function AppNavigator(){
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="LoginScreen">
                <Stack.Screen name="LoginScreen" component={LoginScreen} options={{title: "Login"}}/>
                <Stack.Screen name="FormSreen" component={FormSreen} options={{title: "Formulário"}}/>
                <Stack.Screen name="ListScreen" component={ListScreen} options={{title: "Lista"}}/>
                <Stack.Screen name="RegisterScreen" component={RegisterScreen} options={{title: "Registro"}}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}