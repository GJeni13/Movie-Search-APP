// src/components/MovieList.js
import React from 'react';
import { Link } from 'react-router-dom';

const MovieList = ({ movies }) => {
  return (
    <div className="movie-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 rounded-sm ">
      {movies.map((movie) => (
        <div key={movie.imdbID} className="movie-item border rounded p-2">
          <Link to={`/movie/${movie.imdbID}`}>
            <img src={movie.Poster} alt={movie.Title} className="w-full h-auto mb-2" />
            <h3 className="text-lg font-bold">{movie.Title}</h3>
            <p className="text-base mb-1"><strong>Year:</strong> {movie.Year}</p>
            <p className="text-base mb-1"><strong>Type:</strong> {movie.Type}</p>
            <p className="text-base mb-1"><strong>Rating:</strong> {movie.imdbRating || 'N/A'}</p>
            <p className="text-sm">{movie.Plot || 'No description available.'}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
