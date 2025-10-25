import { Slot } from "expo-router";
import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export default function RootLayout() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>My Expo App</Text>
      </View>
      <Slot />
      <View style={styles.footer}>
        <Text style={styles.footerText}>Codevolution</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1 // expand to fill all available space
  },
  header: {
    backgroundColor: "red",
    padding: 20
  },
  headerText: {
    color: "white"
  },
  footer: {
    backgroundColor: "blue",
    padding: 20
  },
  footerText: {
    color: "white"
  }
});
