import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import Home from "./app/Home";

export default function App() {
  return (
    <View style={styles.container}>
      <Text className="text-3xl font-bold">dwa</Text>
      <Home />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
