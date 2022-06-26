import React from 'react'
import { movies } from '../data/webflix'

const MoviesApp = () => {
  console.log(movies);
  return (
         <div className="container">
          <div className="row mt-5">
            <div className="col">
              <h1>Movies App</h1>
              <hr />
              {/*<pre>{JSON.stringify(movies, false, 2)}</pre>*/}
              <ul>
                {movies.map((movie, index)=>(
                   <li key={movie.id}>
                    {index + 1} - {movie.title}</li>
                ))}
              </ul>
            </div>
          </div>
         </div>
  )
}


export default MoviesApp