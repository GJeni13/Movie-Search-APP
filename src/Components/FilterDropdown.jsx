// src/components/FilterDropdown.js
import React from 'react';

const FilterDropdown = ({ onFilterChange }) => {
  const handleFilterChange = (e) => {
    onFilterChange(e.target.value);
  };

  return (
    <div className="filter-dropdown flex items-center justify-center p-4">
      <select onChange={handleFilterChange} className="border rounded p-2">
        <option value="">All</option>
        <option value="movie">Movie</option>
        <option value="series">Series</option>
        <option value="episode">Episode</option>
      </select>
    </div>
  );
};

export default FilterDropdown;
