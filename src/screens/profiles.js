import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Profiles = () => {
  return (
    <View style={styles.main}>
      <Text>Profiles</Text>
    </View>
  )
}

export default Profiles

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})