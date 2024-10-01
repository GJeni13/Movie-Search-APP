// src/components/SearchBar.js
import React, { useState } from 'react';
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className="search-bar flex items-center justify-center p-4">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for movies..."
        className="border rounded p-2 mr-2"
      />
      <button onClick={handleSearch} className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-700">
      <FaSearch />
      </button>
    </div>
  );
};

export default SearchBar;
