import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
         <h1>Movies Page</h1>
      {movies.map((m, index) => {
        return <div key={index}>{m.title}
        {m.time}
        <ul>
          <li>{m.genres}</li>
        </ul>
        </div>
      })}
    </div>
  );
};

export default Movies;


// This component should render the text `Movies Page` in an `<h1>`, and make a new
// `<div>` for each movie. The `<div>` should contain the movie's title, time and a
// `<ul>` with a list of its genres.
        