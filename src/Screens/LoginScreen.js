import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
  const { navigate } = useNavigation();
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeEmail = (text) => {
    setEmail(text);
  };

  const handleChangePassword = (text) => {
    setPassword(text);
  };

  return (
    <View style={styles.container}>
      <View style={styles.heroContainer}>
        <Image
          source={require("../../assets/images/hero1.jpg")}
          style={styles.hero}
        />
      </View>
      <View style={styles.loginContainer}>
        <View style={styles.loginForm}>
          <View style={styles.loginFormInput}>
            <Text style={styles.email}>Email</Text>
            <TextInput
              style={styles.loginFormInputText}
              onChangeText={handleChangeEmail}
              value={email}
              placeholder="john.smith@mail.com"
              keyboardType="email-address"
            />
          </View>
          <View style={styles.loginFormInput}>
            <Text style={styles.password}>Password</Text>
            <TextInput
              onChangeText={handleChangePassword}
              value={password}
              secureTextEntry
              style={styles.loginFormInputText}
              placeholder="********"
              keyboardType="default"
            />
          </View>
        </View>
        <View style={styles.signIn}>
          <TouchableOpacity style={styles.button} onPress={() => navigate('Home')} >
            <Text style={styles.buttonText}>sign in</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.forgotPassword}>
          <Text style={styles.Forgot}>Forgot?</Text>
          <TouchableOpacity style={styles.resetPassword} >
            <Text style={styles.reset}>Reset Password</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  heroContainer: {
    flex: 4,
    justifyContent: "center",
    alignItems: "center",
  },

  hero: {
    width: "100%",
    height: "100%",
    resizeMode: "stretch",
  },

  loginContainer: {
    flex: 6,
    marginVertical: 80,
  },

  loginForm: {
    backgroundColor: "#fff",
    marginHorizontal: 20,
  },

  loginFormInput: {
    flexDirection: "row",
    borderColor: "#f2f2f2",
    borderBottomWidth: 1,
    marginVertical: 10,
  },

  email: {
    flex: 1,
    fontSize: 17,
    color: "#737373",
  },

  password: {
    flex: 1,
    fontSize: 17,
    color: "#737373",
  },

  loginFormInputText: {
    flex: 3,
    textAlign: "right",
    width: "100%",
    height: 50,
    fontWeight: "bold",
  },

  signIn: {
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 20,
    marginVertical: 20,
  },

  button: {
    width: "100%",
    backgroundColor: "#f75555",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 16,
  },

  buttonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    textTransform: "uppercase",
  },

  forgotPassword: {
    flexDirection: "row",
    marginHorizontal: 20,
    marginVertical: 20,
  },

  Forgot: {
    color: "#595959",
    fontSize: 15,
    fontWeight: "bold",
    marginRight: 10,
  },

  resetPassword: {
    borderBottomWidth: 2,
    borderColor: "#f75555",
  },

  reset: {
    color: "#595959",
    fontSize: 15,
    fontWeight: "bold",
  },
});
