import React, { useEffect, useRef, useState } from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import { Video, AVPlaybackStatus } from 'expo-av';
export default function ShowVideo(props) {
  const [data, setData] = useState(props.route.params);
  const video = useRef(null)
  const [status, setStatus] = useState({})
  useEffect(() => {
    props.navigation.setOptions({ title:`${data.title}` })
    video.current.playAsync()
  }, []);
  return (
    <View style={styles.container}>
    <Video
    ref={video}
    style={styles.video}
    source={{
      uri: `${data.videoUrl}`,
    }}
    useNativeControls
    resizeMode="contain"
    isLooping
    onPlaybackStatusUpdate={status => setStatus(() => status)}
  />
    </View>
  );
}
