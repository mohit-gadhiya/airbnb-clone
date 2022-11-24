import { View, Text, Image } from "react-native";
import React from "react";
import styles from "./style";

const Post = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg",
        }}
        style={styles.image}
      />
      <Text style={styles.bedroom}>1 Bed 1 Bedroom</Text>
      <Text style={styles.description} numberOfLines={2}>
        Entire Flat Lorem Entire Flat Lorem Entire Flat Lorem Entire Flat Lorem
        Entire Flat Lorem Entire Flat Lorem Entire Flat Lorem Entire Flat Lorem
        Entire Flat Lorem Entire Flat Lorem
      </Text>
      <Text style={styles.prices}>
        <Text style={styles.oldPrice}>$36 </Text>
        <Text style={styles.discountPrice}>$30 </Text>/ Text
      </Text>
      <Text style={styles.finalPrice}>$230 Total</Text>
    </View>
  );
};

export default Post;
