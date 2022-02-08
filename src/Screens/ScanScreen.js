import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { useNavigation } from '@react-navigation/native';

const ScanScreen = () => {
  const { navigate } = useNavigation();
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    navigate('Member', {'memberId': data});
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <View style={styles.barCodeContainer}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={[StyleSheet.absoluteFillObject, styles.barCode]}
      />
      {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
      </View>
      <View style={styles.footerContainer}>
        <Text style={styles.footerText}>Want to share your contact?</Text>
        <TouchableOpacity style={styles.footerButton} onPress={()=> navigate('Home')} >
          <Text style={styles.footerButtonText}>Send QR</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ScanScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  barCodeContainer: {
    flex: 9,
    flexDirection: 'column',
    justifyContent: 'center',
    opacity: 1,
    backgroundColor: '#000',
  },
  barCode: {
    width: '100%',
    height: '100%',
  },
  footerContainer: {
    flex: 1,
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
