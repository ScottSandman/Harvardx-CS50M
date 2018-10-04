import React from 'react'
import { StyleSheet, Text, View, TextInput, Image, FlatList, TouchableOpacity } from 'react-native'
import { createStackNavigator } from 'react-navigation'

export default class MainScreen extends React.Component {
  static navigationOptions = ({navigation}) => (
    {
      headerTitle: 'Movie Search',
    }
  )

  // componentDidMount() {
  //   this.fetchMovies()
  // }

  state = {
    movies: null,
    text: '',
  }

  onTextChanged(text) {
    this.setState({
      text: text,
    })
    this.fetchMovies()
  }

  processMovies = movie => ({
    title: movie.Title,
    year: movie.Year,
    poster: movie.Poster,
    type: movie.Type,
  })

  fetchMovies = async () => {
    if (this.state.text != '') {
      const url = 'http://www.omdbapi.com/?apikey=841582fd&s='
      let urlText = this.state.text
      let searchUrl = url + urlText
      console.log(searchUrl)
      const response = await fetch(url)
      const {Search, totalResults} = await response.json()
      console.log({totalResults})
      console.log({Search})
      return Search.map(this.processMovies)
    }
  }

  Movie = props => (
    <TouchableOpacity style={styles.row} onPress={() => props.onSelectMovie(props)}>
      <Image
        source = {{
          url: props.poster,
        }}
      />
      <Text>{this.props.title}</Text>
      <Text>{this.props.year}</Text>
      <Text>{this.props.type}</Text>
    </TouchableOpacity>
  )

  // renderItem = ({item}) => <Movie {...item} />

  // FlatListMovies = props => <FlatList
  //   data={this.props.movies}
  //   renderItem={renderItem}
  //   />

  render() {
    return(
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          onChangeText = {(text) => this.setState({text: text})}
          onEndEditing = {this.fetchMovies}
          value = {this.state.text}
        />
        <FlatList
          data={this.state.movies}
          renderItem = {({item}) => <Movie {...item} />}
        />
      </View>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#ccc',
  },
  input: {
    borderColor: 'blue',
    borderWidth: 2,
    fontSize: 16,
    width: 300,
    backgroundColor: 'white',
    padding: 5,
  },
  row: {padding: 10},
})
