import { Text, View, StyleSheet } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text className="text-red-500 text-4xl bg-purple-500">Hello my first React - Native App  .</Text>
      <Text className="text-blue-700"> I am So much excited ......  .</Text>
      <Link href="/about">About</Link>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
