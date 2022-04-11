import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, useColorScheme } from 'react-native';
import MyTabs from './src/navigation/main-navigation';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { SafeAreaProvider, SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

const CustomStatusBar = ({backgroundColor, barStyle = "light-content"}) => {

  const insets = useSafeAreaInsets();

  return (
    <View style={{height: insets.top, backgroundColor}}>
      <StatusBar
        barStyle={barStyle}
        animated={true}
        backgroundColor={backgroundColor}
        //translucent={true}
      />
    </View>
  )
}

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'rgb(255, 45, 85)',
  },
};

export default function App() {

  const scheme = useColorScheme();

  return (
    <SafeAreaProvider>
      <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
        <CustomStatusBar backgroundColor="#fff" />
        <MyTabs />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}