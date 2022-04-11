import { StyleSheet, Dimensions } from 'react-native'

const { width, height } = Dimensions.get("window")

export default HomeStyles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: "#fff",
    },
    subContainer: {
        marginVertical: 30,
        marginHorizontal: 20,
    },
    topBar: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    topBarText1: {
        color: "#00B383",
        fontWeight: "bold",
        fontSize: 17
    },
    topBarText2: {
        color: "#222B45",
        fontWeight: "bold",
        fontSize: 17
    },
    sliderBoxStyle: {
        borderRadius: 10,
        marginTop: height/50,
        marginBottom: height/20,
        height: height/6
    },
    flatlist1: {
        marginVertical: 20
    },
    popularProductsContainer: {
        marginTop: 10,
    },
    popularProductsHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 10
    },
    popularProductsHeaderText1: {
        color: "#000", 
        fontWeight: "normal", 
        fontSize: 17
    },
    popularProductsHeaderText2: {
        color: "#00B383",
        fontWeight: "normal",
        fontSize: 17
    },
    flatlist2: {
        marginTop: height/60,
        paddingBottom: height/1
    }

})