import React, { useEffect, useState } from "react";
import { View, FlatList ,Text} from "react-native";
import List from "../../components/List";
import styles from "./styles";

const Schedule = () => {
  const [list, setList] = useState();
  const [loading, isLoading] = useState(true);
  useEffect(() => {
    async function getAllScheduleData() {
      const response = await fetch(
        "https://us-central1-dazn-sandbox.cloudfunctions.net/getSchedule"
      );

      const data = await response.json();

      setList(data);
      isLoading(false);
    }

    getAllScheduleData();
  }, []);

  return (
    <View style={styles.container}>

    {!loading ? <FlatList data={list} renderItem={({ item }) => <List item={item} />} /> : <Text>Ainda a processar</Text>}
    </View>
  );
};

export default Schedule;
