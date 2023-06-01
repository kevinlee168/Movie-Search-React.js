import React from "react";
import SearchIcon from '../search.svg';

const SearchMovieForm = (props) => {
    return (
        <div className="search">
        <input
          placeholder="Search for movies"
          value={props.searchTerm}
          onChange={props.changeSearchTerm}
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => props.searchMovies(props.searchTerm)}
        />
      </div>
    )
}

export default SearchMovieForm;