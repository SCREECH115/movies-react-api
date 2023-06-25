import './App.css'
import { FaSistrix, FaDiamond } from 'react-icons/fa6'
import Movie from './Movie'
import { useState } from 'react'

const API_URL = `https://www.omdbapi.com/?i=tt3896198&apikey=${import.meta.env.VITE_API_KEY}`

const cache = new Map();

const App = () => {

  const [input, setInput] = useState('');
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)

  const searchMovies = async () => {
    setLoading(true)
    setMovies([])

    if (cache.has(input)) {
      setMovies(cache.get(input))
      setLoading(false)
      return
    }

    const response = await fetch(`${API_URL}&s=${input}`)
    const data = await response.json()
    console.log(data)
    cache.set(input, data.Search)
    setMovies(data.Search)
    setLoading(false)
  }

  return (
    <>
      <div className="title-container">
        <h1 className='title'>MovieLand</h1>
      </div>

      <div className="search-container">
        <input value={input} onChange={({target}) => {setInput(target.value)}} type='text' placeholder='Search...'></input>
        <FaSistrix className='search-icon' onClick={() => searchMovies()}/>
      </div>

      <div className="movie-container">

        {loading ? <div className="movie-loading">
        <FaDiamond/> Loading <FaDiamond/>
        </div> : ''}

        {movies.map(({imdbID, Link, Poster, Title, Type, Year}) => {
          Link = `https://www.imdb.com/title/${imdbID}`
          return (
            <Movie key={imdbID} link={Link} image={Poster} title={Title} category={Type} year={Year} />
          )
        })}

      </div>

    </>
  )
}

export default App
