import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map((a, index) => {
        return <div key={index}>{a.name}
        <ul>
          <li>{a.movies}</li>
        </ul>
        </div>
      })}
    </div>
  );
};

export default Actors;


//This component should render the text `Actors Page` in an `<h1>`, and make a new
// `<div>` for each actor. The `<div>` should contain the actor's name and a `<ul>`
// with a list of their movies.