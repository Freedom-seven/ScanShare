import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Imagepicker from "./Imagepicker";


const RegisterScreen = () => {
  const [name, onChangeName] = React.useState('');
  const [email, onChangeEmail] = React.useState('');
  const [number, onChangeNumber] = React.useState('');
  const [role, onChangeRole] = React.useState('');
  const [twitter, onChangeTwitter] = React.useState('');
  const [linkedIn, onChangeLinkedIn] = React.useState('');
  const [password, onChangePassword] = React.useState('');

  const { navigate } = useNavigation();

  const onSubmit = () => {
    navigate("Home");
  };
  return (
    <ScrollView style={styles.container} >
      <View style={styles.photoContainer}>
        <View style={styles.hero}>
        <Imagepicker />
        </View>
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
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={onSubmit}>
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
  photoContainer: {
    flex: 4,
  },
  hero: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  formContainer: {
    flex: 5,
    marginHorizontal: 20,
    paddingVertical: 20,
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
    flex: 1,
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
