import { Dimensions, StyleSheet} from 'react-native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Home from '../screens/homepage';
import Meals from '../screens/meals';
import Saved from '../screens/saved';
import Cart from '../screens/cart';
import Profiles from '../screens/profiles';
import { MaterialCommunityIcons, Ionicons, FontAwesome5, AntDesign } from 'react-native-vector-icons'
import { Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const { width, height } = Dimensions.get("window")

const Tab = createMaterialBottomTabNavigator();

function MyTabs() {

const insets = useSafeAreaInsets();

  return (
    <Tab.Navigator
        initialRouteName="Home"
        activeColor="#00B887"
        inactiveColor="#8F9BB3"
        barStyle={{ 
            backgroundColor: '#fff'
        }}
    >
        <Tab.Screen 
            name="Home" 
            component={Home}
            options={{
                tabBarLabel: null,
                tabBarIcon: ({ color }) => (
                    <View style={styles.tabView}>
                      <MaterialCommunityIcons name="home" color={color} size={24} />
                      <Text style={[styles.tabBarLabel, {color: color}]}>Profiles</Text>
                    </View>
                ),
            }} 
        />

        <Tab.Screen 
            name="Meals" 
            component={Meals}
            options={{
                tabBarLabel: null,
                tabBarIcon: ({ color }) => (
                    <View style={styles.tabView}>
                      <Ionicons name="md-document-attach-outline" size={24} color={color} />
                      <Text style={[styles.tabBarLabel, {color: color}]}>Meals</Text>
                    </View>
                ),
            }} 
        />

        <Tab.Screen 
            name="Saved" 
            component={Saved}
            options={{
                tabBarLabel: null,
                tabBarIcon: ({ color }) => (
                    <View style={styles.tabView}>
                      <Ionicons name="bookmark-outline" size={24} color={color} />
                      <Text style={[styles.tabBarLabel, {color: color}]}>Saved</Text>
                    </View>
                ),
            }} 
        />

        <Tab.Screen 
            name="Cart" 
            component={Cart}
            options={{
                tabBarLabel: null,
                tabBarIcon: ({ color }) => (
                    <View style={styles.tabView}>
                      <AntDesign name="shoppingcart" size={24} color={color} />
                      <Text style={[styles.tabBarLabel, {color: color}]}>Cart</Text>
                    </View>
                ),
            }} 
        />

        <Tab.Screen 
            name="Profiles" 
            component={Profiles}
            options={{
                tabBarLabel: null,
                tabBarIcon: ({ color }) => (
                    <View style={styles.tabView}>
                      <FontAwesome5 name="user-circle" size={24} color={color} />
                      <Text style={[styles.tabBarLabel, {color: color}]}>Profiles</Text>
                    </View>
                ),
            }} 
        />
    </Tab.Navigator>
  );
}

export default MyTabs

const styles = StyleSheet.create({
    tabView: {
        width: 50,
        alignItems: "center",
        flex: 1
    },
    tabBarLabel: {
        fontSize: 12
    }
})