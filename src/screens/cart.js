import { StyleSheet, Text, View } from 'react-native'


const Cart = () => {
  return (
    <View style={styles.main}>
      <Text>Cart</Text>
    </View>

  )
}

export default Cart

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})