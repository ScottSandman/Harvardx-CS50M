import MainScreen from './screens/MainScreen'

const processMovies = movie => ({
  title: movie.Title,
  year: movie.Year,
  poster: movie.Poster,
  type: movie.Type,
  id: movie.imdbID,
})

export const searchUrl = (text, pageNum) => {
  const url = 'http://www.omdbapi.com/?apikey=841582fd'
  const searchParam ='&s='
  const pageParam = '&page='
  const detailsParam = '&i='
  let search = text
  let page = pageNum
  console.log(search, page)
  return url + searchParam + search + pageParam + page
}

export const fetchMovies = async (url) => {
    // let searchUrl = url + searchParam + search + pageParam + page
    // console.log(searchUrl)
    const response = await fetch(url)
    const {Search, totalResults} = await response.json()
    console.log({totalResults})
    console.log({Search})
    return Search.map(processMovies)
}
