import { MaterialIcons } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text } from "react-native";

export default function IconButton({ icon, label, onPress }) {
  return (
    <Pressable style={styles.IconButton} onPress={onPress}>
      <MaterialIcons name={icon} size={24} color={"#fff"} />
      <Text style={styles.iconButtonLabel}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  IconButton: {
    justifyContent: "center",
    alignItems: "center",
  },
  iconButtonLabel: {
    color: "#fff",
    marginTop: 12,
  },
});
