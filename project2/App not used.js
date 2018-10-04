import React from 'react'
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native'
import { createStackNavigator } from 'react-navigation'
import MainScreen from './screens/MainScreen'

const AppNavigator = createStackNavigator(
  {
    Main: MainScreen,
    // MovieDetails: MovieDetailsScreen,
    // Settings: SettingsScreen,
  },
  {
    initialRouteName: 'Main',
  }
)

export default class App extends React.Component {
  render() {
    return (
      <AppNavigator/>
    );
  }
}
