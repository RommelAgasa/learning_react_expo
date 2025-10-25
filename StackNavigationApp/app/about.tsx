import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function About() {
  return (
    <View style={styles.conatiner}>
      <Text>About</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    conatiner: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})