import React from 'react';
import { movies } from '../data';

const Movies = () => {
  console.log(movies)
  return (
    <div>
      <h1>Movies Page</h1>
        {movies.map(movie => {
          return (
            <div>
              <h3>{movie.title}</h3>
              <p>Time: {movie.time}</p>
              <p>Genres:</p>
              {movie.genres.map(genre => <li>{genre}</li>)}
            </div>
          )
        })}
    </div>
  );
};

export default Movies;
