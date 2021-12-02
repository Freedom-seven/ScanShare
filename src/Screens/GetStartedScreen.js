import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const GetStartedScreen = () => {
    const { navigate } = useNavigation();
    return (
        <View style={styles.container} >
            <View style={styles.imageContainer}>
                <Image source={require('../../assets/images/hero.png')} style={styles.hero} />
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.title}>
                        keep in touch with the people of scanbox
                    </Text>
                    <Text style={styles.subtitle}>
                        Sign in or register with your ScanBox email to share your contact details with the people of scanbox via QR code scan.
                    </Text>
                    </View>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.button} onPress={() => navigate('Register')} >
                            <Text style={styles.buttonText}>register</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={() => navigate('Login')} >
                            <Text style={styles.buttonText}>sign in</Text>
                        </TouchableOpacity>
                        </View>

        </View>
    )
}

export default GetStartedScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    imageContainer: {
        flex: 5,

    },

    hero: {
        width: '100%',
        height: '100%',
        resizeMode: 'stretch',
    },

    textContainer: {
        flex: 3,
        marginVertical: 20,
        paddingHorizontal: 20,
    },

    title: {
        fontSize: 20,
        marginBottom: 30,
        textTransform: 'uppercase',
        color : '#404040',
    },

    subtitle: {
        fontSize: 18,
        color: '#999',
    },

    buttonContainer: {
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 30,
    },

    button: {
        borderBottomWidth: 2,
        borderColor: '#990000',
    },

    buttonText: {
        fontSize: 20,
        textTransform: 'uppercase',
        color: '#404040',
    },


})
