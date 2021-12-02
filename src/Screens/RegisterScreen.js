import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

const RegisterScreen = () => {
  const [name, onChangeName] = React.useState("");
  const [email, onChangeEmail] = React.useState("");
  const [number, onChangeNumber] = React.useState("");
  const [role, onChangeRole] = React.useState("");
  const [twitter, onChangeTwitter] = React.useState("");
  const [linkedIn, onChangeLinkedIn] = React.useState("");
  const [password, onChangePassword] = React.useState("");
  const [confirmPassword, onChangeConfirmPassword] = React.useState("");

  return (
    <ScrollView style={styles.container}>
      <View style={styles.heroContainer}>
        <AntDesign name="user" size={80} color="#f75555" style={styles.icon} />
        <TouchableOpacity style={styles.addProfile}>
          <Text style={styles.addProfileText}>add profile photo</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Full Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Joan Shay"
            keyboardType="default"
            onChangeText={onChangeName}
            value={name}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="joan.shay@sparrow.com"
            keyboardType="email-address"
            autoCapitalize="none"
            onChangeText={onChangeEmail}
            value={email}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Phone Number</Text>
          <TextInput
            style={styles.input}
            placeholder="+233(244) 245 190"
            keyboardType="phone-pad"
            onChangeText={onChangeNumber}
            value={number}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Role</Text>
          <TextInput
            style={styles.input}
            placeholder="Director of Marketing"
            keyboardType="default"
            onChangeText={onChangeRole}
            value={role}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Twitter</Text>
          <TextInput
            style={styles.input}
            placeholder="@joansays"
            keyboardType="email-address"
            onChangeText={onChangeTwitter}
            value={twitter}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>LinkedIn</Text>
          <TextInput
            style={styles.input}
            placeholder="/joan.shay"
            keyboardType="email-address"
            onChangeText={onChangeLinkedIn}
            value={linkedIn}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="*******"
            keyboardType="default"
            secureTextEntry
            onChangeText={onChangePassword}
            value={password}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Confirm Password</Text>
          <TextInput
            style={styles.input}
            placeholder="*******"
            keyboardType="default"
            secureTextEntry
            onChangeText={onChangeConfirmPassword}
            value={confirmPassword}
          />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  heroContainer: {
    flex: 3,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 30,
    resizeMode: "stretch",
  },
  addProfile: {
    padding: 10,
  },
  addProfileText: {
    fontSize: 16,
    color: "#f75555",
    textTransform: "uppercase",
    fontWeight: "bold",
  },

  formContainer: {
    flex: 6,
    marginHorizontal: 20,
    paddingVertical: 10,
  },
  inputContainer: {
    flexDirection: "row",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
  },
  label: {
    flex: 1,
    fontSize: 18,
    color: '#595959'
  },
  input: {
    flex: 2,
    fontSize: 18,
    textAlign: "right",
    width: "100%",
  },
  buttonContainer: {
    flex: 1.2,
    marginHorizontal: 20,
    paddingVertical: 15,
  },
  button: {
    backgroundColor: "#f75555",
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    textTransform: "uppercase",
    paddingVertical: 5,
  },
});
