import { StatusBar } from "expo-status-bar";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import MainStack from "./src/stacks/mainStack";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

export default function App() {
  let [fontsLoaded] = useFonts({
    "Asap-Regular": require("./assets/fonts/Asap-Regular.ttf"),
    "Asap-Medium": require("./assets/fonts/Asap-Medium.ttf"),
    "Asap-Bold": require("./assets/fonts/Asap-Bold.ttf"),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <NavigationContainer>
        <StatusBar style="inverted" />
        <MainStack />
      </NavigationContainer>
    );
  }
}
