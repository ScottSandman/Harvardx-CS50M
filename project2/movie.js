import React from 'react'
import {TouchableOpacity, StyleSheet, Text, View, Image} from 'react-native'
import PropTypes from 'prop-types'

onSelectMovie = movie => {
    props.navigation.push('MovieDetails', movie)
  }

const Movie = props => (
  <TouchableOpacity style={styles.row} onPress = { () => onSelectMovie(props)}>
    <View flexDirection='row' style={{paddingTop: 10}}>
      <Image
        style = {{width: 75, height: 75}}
        source = {{
          uri: props.poster,
        }}
      />
      <View flexDirection='column' style={{paddingLeft: 10}}>
        <Text style={{fontSize: 16, fontWeight: 'bold'}}>{props.title}</Text>
        <Text>{props.year}</Text>
        <Text>({props.type})</Text>
      </View>
    </View>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  row: {padding: 10},
})

export default Movie
