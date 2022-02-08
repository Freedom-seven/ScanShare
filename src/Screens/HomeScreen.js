import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { QRCode } from "react-native-custom-qr-codes-expo";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = (props) => {

  // const {data,image, name,role} = props.route.params;
  // console.log(props.route.params);

    const { navigate } = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Exchange Contact Information</Text>
        <Text style={styles.subText}>
          Scan this QR below to exchange your contact information with your
          partner.
        </Text>
      </View>
      <View style={styles.qrContainer}>
        <QRCode 
          content={JSON.stringify(props.route.params)}
          codeStyle="square"
          outerEyeStyle="square"
          innerEyeStyle="square"
          size={250}
          bgColor="black"
          fgColor="white"
        />
      </View>
      <View style={styles.profileContainer}>
        <Image
          style={styles.profileImage}
          source={require("../../assets/images/profile.jpg")}
        />
        <View style={styles.profileTextContainer}>
          <Text style={styles.profileText}>Joan Shay</Text>
          <Text style={[styles.profileText, {color: '#ddd'}]}>Head of Marketing</Text>
        </View>
      </View>
      <View style={styles.footerContainer}>
        <Text style={styles.footerText}>Want to add a new connection?</Text>
        <TouchableOpacity style={styles.footerButton} onPress={()=> navigate('Scan')} >
          <Text style={styles.footerButtonText}>Scan QR</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  textContainer: {
    flex: 2,
    marginHorizontal: 20,
    marginVertical: 40,
    justifyContent: "center",
    alignItems: "center",
  },

  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
    paddingBottom: 10,
    marginLeft: -75,
  },
  subText: {
    fontSize: 17,
    color: "#ddd",
  },
  qrContainer: {
    flex: 5,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 20,
  },
  profileContainer: {
    flex: 2,
    flexDirection: "row",
    marginTop: 40,
    marginHorizontal: 20,
    paddingVertical: 20,
  },
  profileImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  profileTextContainer: {
      paddingHorizontal: 20,
  },
  profileText: {
    fontSize: 20,
    color: "#000",
  },
  footerContainer: {
    flex: 1.5,
    flexDirection: "row",
    borderTopWidth: 1,
    borderTopColor: "#ddd",
    justifyContent: "center",
    alignItems: "center",
  },
  footerText: {
    fontSize: 16,
    color: "#000",
  },
  footerButton: {
    width: 130,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "#f75555",
    padding: 5,
    marginHorizontal: 15,
  },
  footerButtonText: {
    fontSize: 20,
    color: "#f75555",
  },
});
