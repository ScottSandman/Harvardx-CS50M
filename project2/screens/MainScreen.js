import React from 'react';
import { StyleSheet, Text, View, TextInput, FlatList } from 'react-native';
import { fetchMovies, searchUrl } from '../Api'
import { Constants } from 'expo'
import Movie from '../movie'

export default class MainScreen extends React.Component {
  static navigationOptions = () => (
    {
      // headerTitle: 'Movie Search',
      header: <View style={styles.header}>
                <Text style={styles.headerTitle}>Movie Search</Text>
              </View>
    }
  )

  componentDidMount() {
    if (this.state.text !== '') {
    this.getMovies()
    }
  }

  state = {
    movies: null,
    text: '',
    pageNum: 1,
  }

  getMovies = async () => {
    const url = await searchUrl(this.state.text, this.state.pageNum)
    const results = await fetchMovies(url)
    this.setState({movies: results})
    // console.log(this.state.movies)
  }

  selectMovie = movie => {
    this.props.navigation.push('MovieDetails', movie)
  }

  render() {
    return(
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          onChangeText = {(text) => this.setState({text: text})}
          onEndEditing = {this.getMovies}
          placeholder = 'search'
        />
        <FlatList
          renderItem = {({item}) => <Movie { ...item} />}
          data = {this.state.movies}
          keyExtractor = {(item, index) => index}
          // onSelectMovie = {this.selectMovie}
          // onEndReached = { () => {
          //   this.setState(prevState => ({
          //     pageNum: prevState.pageNum + 1,
          //   }))
          //   this.getMovies()
          //   }
          // }
          // onEndReachedThreshold = {0.1}
        />
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
  input: {
    borderColor: 'gray',
    borderWidth: 3,
    fontSize: 16,
    backgroundColor: '#ccc',
    paddingTop: 5,
    paddingLeft: 10,
    width: '80%',
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
