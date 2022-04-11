import { useState } from "react"
import { View, Text, Dimensions, FlatList, TouchableOpacity, Pressable } from 'react-native'
import { AntDesign } from 'react-native-vector-icons'
import { SliderBox } from "react-native-image-slider-box";
import slides from '../../assets/fruitIcons/slides';
import popularProducts from '../../assets/fruitIcons/popularProducts';
import HomeStyles from '../styles/homeStyles';
import FruitSlide from '../components/fruitSlide';
import PopularProduct from '../components/popularProduct';
import { useTheme } from "@react-navigation/native";

const { width, height } = Dimensions.get("window")

import img1 from '../../assets/fruitsSlides/tangerines.jpg'
import img2 from '../../assets/fruitsSlides/pineapple.jpg'
import img3 from '../../assets/fruitsSlides/strawberry.jpg'
import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";


const Home = () => {

  const { colors, dark, primary  } = useTheme()
  // const [state, setState] = useState({});
  const [state, setState] = useState({name: "Samuel Fayomi", age: 15});

   const updateTheState = () => {
     setState(prevState => {
       // Object.assign would also work
       return {...prevState, age: 25};
      //  console.log("prevState", prevState)
      //  console.log("state", state)
     });
     console.log(state)
  }

  return (
    <View style={[HomeStyles.mainContainer, {backgroundColor: colors.primary}]}>
      <View style={HomeStyles.subContainer}>
        <View style={HomeStyles.topBar}>
          <TouchableOpacity onPress={() => updateTheState()}>
            <Text style={HomeStyles.topBarText1}> 
              Fresh
              <Text style={HomeStyles.topBarText2}>Market</Text>
            </Text>
          </TouchableOpacity>
          <AntDesign name="search1" size={24} color="black" />
        </View>

        <SliderBox
          parentWidth={0.9 * width}
          images={[img1, img2, img3]}
          dotColor="#00B383"
          inactiveDotColor="#EDF1F7"
          ImageComponentStyle={HomeStyles.sliderBoxStyle}
        />
        
        <View>
          <FlatList 
            data={slides}
            contentContainerStyle={HomeStyles.flatlist1}
            keyExtractor={item => item.id}
            renderItem={
                ({item}) => <FruitSlide item={item} />
            }
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
        
        <View style={HomeStyles.popularProductsContainer}>
          <View style={HomeStyles.popularProductsHeader}>
            <Text style={HomeStyles.popularProductsHeaderText1}>
              Popular Products
            </Text>
            <Pressable>
              <Text style={HomeStyles.popularProductsHeaderText2}>
                View all
              </Text>
            </Pressable>
          </View>

          <View>
            <FlatList 
              data={popularProducts}
              contentContainerStyle={HomeStyles.flatlist2}
              keyExtractor={item => item.id}
              renderItem={
                  ({item}) => <PopularProduct item={item} />
              }
              showsVerticalScrollIndicator={false}
            />
          </View>
        </View> 
      </View>
    </View>
  )
  
}

export default Home