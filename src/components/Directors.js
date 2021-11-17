import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map((d, index) => {
        return <div key={index}>{d.name}
        <ul>
          <li>{d.movies}</li>
        </ul>
        </div>
      })}
    </div>
  );
}

export default Directors


// This component should render the text `Directors Page` in an `<h1>`, and make a
// new `<div>` for each director. The `<div>` should contain the director's name
// and a `<ul>` with a list of their movies.