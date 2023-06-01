import React from "react";
import MovieCard from "./MovieCard";

const ShowMovieList = (props) => {
    return (
        <>
        {
            props.movies?.length > 0 // Note the '?' in movies?.length > 0
              ? (
                <div className='container'>
                  {props.movies.map((movie) => (
                    <MovieCard movie={movie} />
                  ))}
                </div>
              ) : (
                <div className='empty'>
                  <h2>No movies found</h2>
                </div>
              )
          }
          </>
    );
}

export default ShowMovieList;