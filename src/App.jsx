// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import SearchBar from './Components/SearchBar';
import MovieList from './Components/MovieList';
import MovieDetails from './Components/MovieDetails';
import FilterDropdown from './Components/FilterDropdown';
import Pagination from './Components/Pagination';
import { fetchMovies } from './Services/api';
import LoadingSpinner from './Components/LoadingSpinner';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [filterType, setFilterType] = useState('');
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSearch = async (searchQuery) => {
    setQuery(searchQuery);
    setLoading(true);
  
    // Ensure filterType and currentPage are passed to fetchMovies
    const data = await fetchMovies(searchQuery, currentPage, filterType);
    
    setLoading(false);
    
    if (data.Search) {
      setMovies(data.Search);
      setTotalPages(Math.ceil(data.totalResults / 20));  // Calculate total pages based on results
      setCurrentPage(1);  // Reset to the first page after a new search
    } else {
      setMovies([]);
      setTotalPages(1);
      alert('No results found. Please try a different search query.');
    }
  };
  
  const handlePageChange = async (page) => {
    setCurrentPage(page);
    setLoading(true);
    const data = await fetchMovies(query, filterType, page);
    setLoading(false);
    setMovies(data.Search || []);
  };

  const handleFilterChange = (type) => {
    setFilterType(type);
    handleSearch(query);  // Re-trigger the search with the new filter
  };

  return (
    <Router>
      <div className="app">
         <div className="min-h-screen bg-white dark:bg-gray-800">
      {/* Navbar */}
      <Navbar />
      
      {/* Content of the movie search app goes here */}
      <div className="p-4">
        <h2 className="flex justify-center font-serif text-5xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-yellow-500 to-red-700 ">
          Start searching for your favorite movies!
        </h2>
        {/* Add the rest of your app components */}
      </div>
        <SearchBar onSearch={handleSearch} />
        <FilterDropdown onFilterChange={handleFilterChange} />
        {loading ? (
          <LoadingSpinner />
        ) : (
          <Routes>
            <Route path="/" element={
              <>
                <MovieList movies={movies} />
                <Pagination 
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={handlePageChange}
                  />
              </>
            } />
            <Route path="/movie/:id" element={<MovieDetails />} />
          </Routes>
        )}
      </div>
        </div>
    </Router>
  );
};

export default App;
