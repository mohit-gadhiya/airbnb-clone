import { View, Text, Image } from "react-native";
import React from "react";
import styles from "./style";

const Post = (props) => {
  const post = props.post;

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: post.image,
        }}
        style={styles.image}
      />
      <Text style={styles.bedroom}>
        {post.bed} Bed {post.bedroom} Bedroom
      </Text>
      <Text style={styles.description} numberOfLines={2}>
        {post.type}. {post.title}
      </Text>
      <Text style={styles.prices}>
        <Text style={styles.oldPrice}>${post.oldPrice} </Text>
        <Text style={styles.discountPrice}>${post.newPrice} </Text>/ night
      </Text>
      <Text style={styles.finalPrice}>${post.totalPrice} Total</Text>
    </View>
  );
};

export default Post;
