import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Image,
  View,
  Platform,
  TouchableOpacity,
  Text,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { AntDesign } from "@expo/vector-icons";

const Imagepicker = () => {
  const [image, setImage] = useState(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <View style={styles.container}>
      {image ? (
        <TouchableOpacity onPress={pickImage}>
          <Image source={{ uri: image }} style={styles.image} />
          <Text style={styles.imageText}>edit profile photo</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={pickImage} style={styles.iconContainer}>
          <AntDesign name="user" size={80} color="#f75555" />
          <Text style={styles.iconText}>add profile photo</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Imagepicker;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 420,
    height: 220,
    resizeMode: "stretch",
  },
  imageText: {
    position: "absolute",
    top: "40%",
    left: " 30%",
    fontSize: 16,
    color: "#f75555",
    textTransform: "uppercase",
    fontWeight: "bold",
    borderWidth: 1,
    borderColor: "#f75555",
    textAlign: "center",
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  iconContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 50,
  },
  iconText: {
    fontSize: 16,
    color: "#f75555",
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});
