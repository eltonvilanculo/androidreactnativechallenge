import React, { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";
import List from "../../components/List";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

export default function Event() {
  const [list, setList] = useState();
  const [loading, isLoading] = useState(true);
  const navigation =  useNavigation()
  useEffect(() => {
    async function getData() {
      const response = await fetch(
        "https://us-central1-dazn-sandbox.cloudfunctions.net/getEvents"
      );

      const data = await response.json();

      setList(data);
      isLoading(false);
    }

    getData();
  }, []);

  return (
    <View style={styles.container}>
      {!loading ? (
        <FlatList
          data={list}
          renderItem={({item}) => {
            return <List item={item} onPress={()=>navigation.navigate('Video',item)}/>;
          }}
          keyExtractor={(item) => item.id}
        />
      ) : (
        <Text>Carregando...</Text>
      )}


    </View>
  );
}
