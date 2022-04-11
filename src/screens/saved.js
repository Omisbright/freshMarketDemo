import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Saved = () => {
  return (
    <View style={styles.main}>
      <Text>Saved</Text>
    </View>
  )
}

export default Saved

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})