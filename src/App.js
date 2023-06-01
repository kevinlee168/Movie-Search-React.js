import { useEffect, useState } from 'react';
import './App.css';
import SearchMovieForm from './components/SearchMovieForm';
import ShowMovieList from './components/ShowMovieList';

const movie_api_key = process.env.REACT_APP_MOVIE_API_KEY;
console.log(movie_api_key);

const API_URL = 'https://www.omdbapi.com/?i=tt3896198&apikey=' + movie_api_key;


function App() {

  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`); // to get movies data
    const data = await response.json();

    setMovies(data.Search);
    // console.log(data.Search);
  }

  useEffect(() => {
    searchMovies('Star');  // set default search when the webpage loaded.
  }, []);

  function changeSearchTerm(e) {
    setSearchTerm(e.target.value);
  }

  return (
    <div className="app">
      <h1>Movie Search</h1>

      <SearchMovieForm
        searchMovies={searchMovies}
        searchTerm={searchTerm}
        changeSearchTerm={changeSearchTerm}
      />

      <ShowMovieList movies={movies} />

    </div>
  );
}

export default App;
