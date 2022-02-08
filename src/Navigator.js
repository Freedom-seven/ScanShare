import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import WelcomeScreen from "./Screens/WelcomeScreen";
import GetStartedScreen from "./Screens/GetStartedScreen";
import RegisterScreen from "./Screens/RegisterScreen";
import LoginScreen from "./Screens/LoginScreen";
import HomeScreen from "./Screens/HomeScreen";
import ScanScreen from "./Screens/ScanScreen";
import MemberScreen from "./Screens/MemberScreen";
import MyScreen from "./Screens/MyScreen";
import { AntDesign } from "@expo/vector-icons";

const Stack = createStackNavigator();

const LogoTitle = () => {
  return (
    <Image
      source={require("../assets/images/logo.png")}
      style={{ width: 100, height: 100 }}
    />
  );
};


const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome" >
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="GetStarted"
          component={GetStartedScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{
            title: "Register",
            headerStyle: {
              backgroundColor: "#f75555",
              height: 120,
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            title: "Sign In",
            headerStyle: {
              backgroundColor: "#f75555",
              height: 120,
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={({ navigation }) => ({
            headerTitle: (props) => <LogoTitle {...props} />,
            headerStyle: {
              backgroundColor: "#f75555",
              height: 120,
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerTitleAlign: "center",
            headerRight: () => (
              <View style={{ flexDirection: "row" }}>
                <AntDesign
                  name="user"
                  size={30}
                  color="#fff"
                  style={{ marginRight: 30 }}
                  onPress={() => navigation.navigate("MyProfile")}
                />
              </View>
            ),
            headerLeft: null,
        
          })}
        />
        <Stack.Screen name="Scan" component={ScanScreen} options={{headerShown: false }} />
        <Stack.Screen name="Member" component={MemberScreen} options={{
            title: "Member Profile",
            headerStyle: {
              backgroundColor: "#f75555",
              height: 120,
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerTitleAlign: "center",
          }} />
        <Stack.Screen name="MyProfile" component={MyScreen} options={{
            title: "My Profile",
            headerStyle: {
              backgroundColor: "#f75555",
              height: 120,
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerTitleAlign: "center",
          }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;

const styles = StyleSheet.create({});
