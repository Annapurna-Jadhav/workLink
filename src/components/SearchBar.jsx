import React from 'react';

const SearchBar = ({ onSearch }) => {
  const handleSearch = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const filters = {
      location: formData.get('location'),
      workingHours: formData.get('workingHours'),
      workOffer: formData.get('workOffer'),
      salaryRange: formData.get('salaryRange'),
      jobType: formData.get('jobType'), // New filter
    };
    onSearch(filters);
  };

  return (
    <form onSubmit={handleSearch} className="bg-gray-100 p-4 rounded-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <input
          type="text"
          name="location"
          placeholder="Location"
          className="p-2 border rounded"
        />
        <input
          type="text"
          name="workingHours"
          placeholder="Working Hours"
          className="p-2 border rounded"
        />
        <input
          type="text"
          name="workOffer"
          placeholder="Work Offer"
          className="p-2 border rounded"
        />
        <input
          type="text"
          name="salaryRange"
          placeholder="Salary Range"
          className="p-2 border rounded"
        />
        <input
          type="text"
          name="jobType"
          placeholder="Job Type"
          className="p-2 border rounded"
        />
      </div>
      <button type="submit" className="mt-4 bg-blue-500 text-white p-2 rounded">
        Search
      </button>
    </form>
  );
};

export default SearchBar;