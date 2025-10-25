import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { Slot } from 'expo-router'

export default function AuthLayout() {
  return (
    <View style={styles.container}>
      <View style={styles.logo_container}>
        <Image 
        source={require("../../assets/images/react-logo.png")}
        style={styles.logo}
      />
      </View>
      <Slot/>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    logo_container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 50,
        borderWidth: 2,
        borderColor: "#000",
        borderRadius: 10
    },
    logo: {
        width: 100
    }
})