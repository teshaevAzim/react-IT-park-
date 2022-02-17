import React from 'react';

const Movies = ({movies}) => {
    console.log(movies)
  return <div>
      
      <div className="content">
        <div className="movies_card">
            {movies.map((movie) => (
                <div className="movie_box" key={movie.imdbID}>
                    <div className="card">
                        <img src={movie.Poster} alt="" />
                        <div className="card_title">
                            <h1>{movie.Title}</h1> <br />
                            <h3>{movie.Type}</h3> <br />
                            <h4>{movie.Year}</h4>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>
  </div>;
};

export default Movies;
