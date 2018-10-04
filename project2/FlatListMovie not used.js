import React from 'react'
import { FlatList } from 'react-native'
import PropTypes from 'prop-types'

import Movie from './movie'

const renderItem = ({item}) => <Movie {...item} />

const FlatListMovies = props => <FlatList  data={props.movies} renderItem={renderItem}/>

FlatListMovies.propTypes = {
  movie: PropTypes.array,
}

export default FlatListMovies
