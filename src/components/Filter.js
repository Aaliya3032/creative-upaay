import React, { useState } from "react";
import { FaFilter } from 'react-icons/fa';

const Filter = ({ onFilterChange }) => {
   const [showFilters, setShowFilters] = useState(false);
   const [activeFilter, setActiveFilter] = useState(null);

    const handleToggleFilters = () => {
      setShowFilters(!showFilters);
    };
    const handleStatusFilter = (status) => {
      if (activeFilter === status) {
        // If the filter is already active, uncheck it (reset)
        setActiveFilter(null);
        onFilterChange({ status: null }); // Clear the filter
      } else {
        setActiveFilter(status);
        onFilterChange({ status }); // Apply the filter
      }
    };
    
    return (
      <div className="relative">
      <button
        onClick={handleToggleFilters}
        className="text-[#787486] flex items-center px-6 py-2 rounded-lg border border-[#787486] mb-2 hover:text-white hover:bg-[#787486] hover:border-transparent"
      >
        <FaFilter size={16} className="mr-2" /> Filter
      </button>

      {showFilters && (
        <div className="absolute top-full mt-2 w-64 bg-white border border-gray-300 rounded-lg shadow-lg p-4 z-10">
          <div className="mb-4">
            <label className="block text-gray-700">Search:</label>
            <input
              type="text"
              onChange={(e) => onFilterChange({ search: e.target.value })}
              className="mt-1 w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Search tasks..."
            />
          </div>
          <div className="space-y-2">
            <button
              onClick={() => handleStatusFilter('To Do')}
              className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              To Do
            </button>
            <button
              onClick={() => handleStatusFilter('In Progress')}
              className="w-full bg-yellow-500 text-white p-2 rounded-lg hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            >
              In Progress
            </button>
            <button
              onClick={() => handleStatusFilter('Done')}
              className="w-full bg-green-500 text-white p-2 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              Done
            </button>
          </div>
        </div>
      )}

      </div>
    )
   }
   
   export default Filter;