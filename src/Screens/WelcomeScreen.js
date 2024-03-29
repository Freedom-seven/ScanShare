import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const WelcomeScreen = () => {
  const { navigate } = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require("../../assets/images/logo.png")}
          style={styles.logo}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.scanText}>scanbox.</Text>
        <Text style={styles.scanText}>contacts</Text>
        <Text style={styles.scanText}>share</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigate("GetStarted")}
        >
          <Text style={styles.buttonText}>GET STARTED</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  logoContainer: {
    flex: 4,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
    marginBottom: 50,
  },

  logo: {
    width: "80%",
    height: 120,
  },

  textContainer: {
    flex: 4,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 30,
  },

  scanText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#666",
    textTransform: "uppercase",
  },

  buttonContainer: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
  },

  button: {
    borderBottomWidth: 2,
    borderBottomColor: "#990000",
    width: "30%",
  },

  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#666",
  },
});
