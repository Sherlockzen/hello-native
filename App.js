import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Image source={require("./assets/realidade.png")} resizeMode="center" />
      <StatusBar style="auto" />
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
  pinkBackground: {
    backgroundColor: "#fafa57",
  },
});

// const styleTest = StyleSheet.create({
//   container: {
//     backgroundColor: "#faf",
//   },
// });
