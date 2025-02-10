import React from 'react';
import WorkerCard from '../components/WorkerCard';
import SearchBar from '../components/SearchBar';

const Hire = () => {
  const workers = [
    {
      name: 'John Doe',
      contact: '+123456789',
      address: '123 Main St, City',
      workingHours: '9 AM - 5 PM',
      work: 'Cook',
      image: 'https://via.placeholder.com/150',
    },
    // Add more worker data
  ];

  const handleSearch = (filters) => {
    console.log('Search Filters:', filters);
    // Implement search logic here
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Hire Workers</h1>
      <SearchBar onSearch={handleSearch} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        {workers.map((worker, index) => (
          <WorkerCard key={index} {...worker} />
        ))}
      </div>
    </div>
  );
};

export default Hire;