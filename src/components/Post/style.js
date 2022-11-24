import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  image: {
    width: "100%",
    aspectRatio: 3 / 2,
    resizeMode: "cover",
    borderRadius: 10,
  },
  bedroom: {
    marginVertical: 10,
    color: "#5b5b5b",
  },
  description: {
    fontSize: 18,
    lineHeight: 26,
  },
  prices: {
    fontSize: 18,
    marginVertical: 10,
  },
  oldPrice: {
    color: "#5b5b5b",
    textDecorationLine: "line-through",
  },
  discountPrice: {
    fontWeight: "bold",
  },
  finalPrice: {
    color: "#5b5b5b",
    textDecorationLine: "underline",
  },
});
export default styles;
