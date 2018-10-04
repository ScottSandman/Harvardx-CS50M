import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Constants } from 'expo'

export default class MovieDetailsScreen extends React.Component {
  static navigationOptions = ({navigation}) => (
    {
      // headerTitle: 'Movie Search',
      header: <View style={styles.header}>
                <Text style={styles.headerTitle}>Movie Details</Text>
              </View>
    }
  )

  render() {
    return(
      <View style={styles.container}>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 15,
  },
  header: {
    paddingTop: Constants.statusBarHeight,
    paddingBottom: 10,
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: 'blue',
  },
  headerTitle: {
    textAlign: 'center',
    fontSize: 24,
    color: 'white',
  },
})
