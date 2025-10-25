import { StyleSheet, Text, View, Pressable} from "react-native";
import { Link } from "expo-router";

export default function Home() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 20
      }}
    >
      <Text>Home page</Text>
      <Link href="/about">About</Link>
      <Link href="/profile">Profile</Link>
      <Link href="/profile/rom">Profile Not Found</Link>
      <Link href="/products">Products</Link>
      <Link href="/missing-route">Missing Route</Link>
      <Link href="/login">Login</Link>
      <Link href="/register">Register</Link>
      <Link href="/forgot-password">Forgot Password</Link>


      <Link href="/products/best-sellers/playstation" asChild>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Playstation</Text>
        </Pressable>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
    button: {
      backgroundColor:  "#0ea5e9",
      padding: 12,
      borderRadius: 6
    },
    buttonText: {
      fontSize: 16,
      color: "white"
    }

})
