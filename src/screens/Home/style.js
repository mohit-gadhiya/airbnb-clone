import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 500,
    resizeMode: "cover",
    justifyContent: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 80,
    color: "white",
    width: "70%",
    marginLeft: 25,
  },
  button: {
    backgroundColor: "#FFF",
    justifyContent: "center",
    alignItems: "center",
    width: 200,
    height: 40,
    borderRadius: 10,
    marginLeft: 25,
    marginTop: 25,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  searchButton: {
    backgroundColor: "#FFF",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: 20,
    zIndex: 10,
    height: 60,
    width: Dimensions.get("screen").width - 20,
    marginHorizontal: 10,
    borderRadius: 30,
  },
  searchButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 5,
  },
});

export default styles;
