// src/services/api.js
// const key= '130a5e4e';
import axios from 'axios';

const API_URL = 'https://www.omdbapi.com/';
const API_KEY = '130a5e4e';  // Replace with your own API key

// Function to fetch movies based on a search query
export const fetchMovies = async (searchQuery, page = 1, type = '') => {
  try {
    const response = await axios.get(API_URL, {
      params: {
        s: searchQuery,
        page,
        apikey: API_KEY,
        type: type || '',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching movies:', error);
    throw error;
  }
};

// Function to fetch movie details based on IMDb ID
export const fetchMovieDetails = async (imdbID) => {
  try {
    const response = await axios.get(API_URL, {
      params: {
        i: imdbID,
        apikey: API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching movie details:', error);
    throw error;
  }
};
