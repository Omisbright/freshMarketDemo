import { StyleSheet, Text, View, Image } from 'react-native'

const FruitSlide = ({item}) => {
    return (
        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <Image style={styles.image} source={item.Image} />
          </View>
          <Text>{item.title}</Text>
        </View>
    )
  };

export default FruitSlide;

const styles = StyleSheet.create({
    container: {
        justifyContent:"space-evenly",
        marginRight: 30,
        alignItems: "center" 
    },
    imageContainer: {
        width: 38,
        height: 38,
        borderRadius: 19,
        backgroundColor: "#E7F6EC", 
        justifyContent: "center",
        alignItems: "flex-start",
        marginBottom: 10
    },
    image: {
        width: 30,
        height: 30
    },
})