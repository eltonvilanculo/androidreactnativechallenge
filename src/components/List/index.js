import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./styles";

export default function List({item,onPress}) {
  return (
    <TouchableOpacity style={[styles.container, styles.shadowProp]} onPress={onPress}>
      <View style={styles.thumb}>
        <Image
          style={styles.image}
          source={{
            uri: `${item.imageUrl}`,
          }}
        />
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>{item.title}</Text>

        <Text style={styles.subtitle}>{item.subtitle}</Text>

        <Text style={styles.date}>{item.date}</Text>
      </View>
    </TouchableOpacity>
  );
}
