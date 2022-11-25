import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 20,
    marginHorizontal: 20,
    borderBottomWidth: 1,
    borderColor: "lightgray",
  },
  button: {
    borderWidth: 1,
    height: 30,
    width: 30,
    borderRadius: 15,
    borderColor: "#676767",
    justifyContent: "center",
    alignItems: "center",
  },
});
export default styles;
