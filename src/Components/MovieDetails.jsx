// src/components/MovieDetails.js
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchMovieDetails } from '../Services/api';
import LoadingSpinner from './LoadingSpinner';
import { RiArrowGoBackFill } from "react-icons/ri";


const MovieDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const getMovieDetails = async () => {
      const data = await fetchMovieDetails(id);
      setMovie(data);
    };
    getMovieDetails();
  }, [id]);

  if (!movie) return <LoadingSpinner />

  return (
    <div className="movie-details p-4">
      <button onClick={() => navigate(-1)} className="bg-blue-500 text-black p-4 hover:bg-red-500 text-3xl rounded mb-4">
      <RiArrowGoBackFill />
      </button>
      <img src={movie.Poster} alt={movie.Title} className="w-full h-auto mb-4" />
      <h2 className="text-4xl font-bold mb-4">{movie.Title}</h2>
      <p className="mb-5 font-semibold"><strong>Year:</strong> {movie.Year}</p>
      <p className="mb-5 font-semibold"><strong>Genre:</strong> {movie.Genre}</p>
      <p className="mb-5 font-semibold"><strong>Plot:</strong> {movie.Plot}</p>
      <p className="mb-5  font-semibold"><strong>Ratings:</strong> <span className='text-green-500 text-xl'>{movie.Ratings.map(rating => `${rating.Source}: ${rating.Value}`).join(', ')}</span></p>
      <p className="mb-5 font-semibold"><strong>Actors:</strong> {movie.Actors}</p>
    </div>
  );
};

export default MovieDetails;
