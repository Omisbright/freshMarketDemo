import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'

const { width, height } = Dimensions.get("window")

const PopularProduct = ({item}) => {
    return (
        <View style={styles.container}>
          <View style={styles.imageContainer}>

          </View>
          <View style={styles.textContainer}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
            <Text style={styles.price}>{item.price}</Text>
          </View>
        </View>
    )
  };

export default PopularProduct;

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 5,
    },
    imageContainer: {
        width: width/2.6,
        height: 100,
        backgroundColor: "#C5CEE0",
        borderRadius: 5,
        marginRight: 5
    },
    textContainer: {
        justifyContent: "space-between",
        flex:1,
    },
    title: {
        marginVertical: 3,
        fontWeight: "bold",
    },
    description: {
        marginVertical: 3,
        fontWeight: "200",
    },
    price: {
        marginVertical: 3,
        fontWeight: "bold",
        color: "#00B383"
    }
})