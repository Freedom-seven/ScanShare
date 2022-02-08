import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { Ionicons, Entypo, Feather, EvilIcons } from "@expo/vector-icons";

const MemberScreen = () => {
    return (
        <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image
          style={styles.profileImage}
          source={require("../../assets/images/profile1.jpg")}
        />
        <View style={styles.profileInfo}>
          <Text style={styles.profileName}>Larry Hutchson</Text>
          <Text style={styles.profileTitle}>Sales Executive</Text>
        </View>
      </View>
      <View style={styles.profileStats}>
        <TouchableOpacity style={styles.profileSocial}>
          <Entypo name="twitter-with-circle" size={35} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.profileSocial}>
          <Entypo name="linkedin-with-circle" size={35} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.info}>
        <View style={styles.infoItem}>
          <Ionicons name="ios-call-outline" size={24} color="black" />
          <Text style={styles.infoItemText}>+233 (245) 234 123</Text>
        </View>
        <View style={styles.infoItem}>
          <Feather name="mail" size={24} color="#777" />
          <Text style={styles.infoItemText}>larry@scanbox.co</Text>
        </View>
        <View style={styles.infoItem}>
          <EvilIcons name="location" size={24} color="black" />
          <Text style={styles.infoItemText}>Shoreditch, UK</Text>
        </View>
      </View>
    </View>
  );
};

export default MemberScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        paddingHorizontal: 20,
    },
    profileContainer: {
        flex: 2,
        flexDirection: "row",
        alignItems: "center",
        padding: 20,
    },
    profileImage: {
        width: 80,
        height: 80,
        borderRadius: 40,
    },
    profileInfo: {
        marginLeft: 20,
    },
    profileName: {
        fontSize: 20,
        fontWeight: "bold",
    },
    profileTitle: {
        fontSize: 16,
        color: "#777",
    },
    profileStats: {
        flex: 1,
        flexDirection: "row",
        paddingHorizontal: 20,
        marginTop: -60,

    },
    profileSocial: {
        width: 45,
        height: 45,
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ddd",
        marginHorizontal: 10,
    },
    info: {
        flex: 4,
        padding: 20,
        marginTop: -40,

    },
    infoItem: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 20,
    },
    infoItemText: {
        marginLeft: 20,
        fontSize: 16,
    },
})
