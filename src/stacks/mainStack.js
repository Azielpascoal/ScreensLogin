import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SignIn from "../screens/SignIn";
import SignUp from "../screens/SignUp";

const Stack = createStackNavigator();
export default () => {
  return (
    <Stack.Navigator
      initialRouteName="SignIn"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen component={SignIn} name="SignIn" />
      <Stack.Screen component={SignUp} name="SignUp" />
    </Stack.Navigator>
  );
};
