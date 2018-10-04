import React from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'
import { createStackNavigator } from 'react-navigation'
import MainScreen from './screens/MainScreen'
import MovieDetailsScreen from './screens/MovieDetailsScreen'

export default class App extends React.Component {
  render() {
    return <AppNavigator/>;
  }
}

const AppNavigator = createStackNavigator(
  {
    Main: MainScreen,
    MovieDetails: MovieDetailsScreen,
    // Settings: SettingsScreen,
  },
  {
    initialRouteName: 'Main',
  }
)
