import React from 'react';
import { actors } from '../data';

const Actors = () => {
  console.log(actors)
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map(actor => {
        return (
          <div className="actor" key={actor.name}>
            <h2>Name: {`${actor.name}`}</h2>
            <p>Movies:</p>
            {actor.movies.map(movie => <li>{movie}</li>)}
          </div>
        )})}
    </div>
  );
};

export default Actors;
