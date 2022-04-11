import React, { useRef } from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import Video from 'react-native-video';

import confessionVideo from '../../assets/confession.mp4'

const Meals = () => {

  const playerRef = useRef()

  return (
    <View style={styles.main}>
      <Text>Meals</Text>
  </View>
  )
}

export default Meals

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})