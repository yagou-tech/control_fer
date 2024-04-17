import React from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, View } from "react-native";
import SignInScreen from "./app/components/SignInScreen";
import InformationScreen from "./app/components/InformationScreen";
import { AntDesign } from "@expo/vector-icons";
import VideoScreen from "./app/components/VideoScreen";
import MainScreen from "./app/components/HomeScreen";
import LenghtScreen from "./app/components/LenghtScreen";
import WeightScreen from "./app/components/WeightScreen";
import DiameterScreen from "./app/components/DiameterScreen";
import ConformeScreen from "./app/components/ConformeScreen";
import NoConformeScreen from "./app/components/NoConformeScreen";

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignInScreen">
        <Stack.Screen
          name="SignInScreen"
          component={SignInScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="InformationScreen"
          component={InformationScreen}
          options={({ route }) => ({
            title: "",
            headerLeft: (props) => (
              <View>
                <AntDesign
                  name="left"
                  size={24}
                  color="black"
                  style={{ margin: 10 }}
                  onPress={props.onPress}
                />
                {/* {route.params?.step !== undefined && (
                  <ProgressBarAndroid
                    styleAttr="Horizontal"
                    color="#262829"
                    indeterminate={false}
                    progress={(route.params.step + 1) / 4}
                  />
                )} */}
              </View>
            ),
            headerTitleStyle: {
              fontSize: 16,
              fontWeight: "bold",
              color: "#333",
              paddingRight: 50,
            },
          })}
        />
        <Stack.Screen
          name="VideoScreen"
          component={VideoScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HomeScreen"
          component={MainScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LenghtScreen"
          component={LenghtScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="WeightScreen"
          component={WeightScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DiameterScreen"
          component={DiameterScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ConformeScreen"
          component={ConformeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="NoConformeScreen"
          component={NoConformeScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eff0f0",
    alignItems: "center",
    justifyContent: "center",
  },
});
