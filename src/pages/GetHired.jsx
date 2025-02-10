import React from 'react';
import WorkerCard from '../components/WorkerCard';
import SearchBar from '../components/SearchBar';

const GetHired = () => {
  // Sample data for job postings
  const jobs = [
    {
      name: 'Restaurant Cook',
      contact: '+123456789',
      address: '456 Food St, City',
      workingHours: '10 AM - 6 PM',
      work: 'Cook',
      image: 'https://via.placeholder.com/150',
      salary: '$15/hour',
      jobType: 'Full-time',
    },
    {
      name: 'Office Cleaner',
      contact: '+987654321',
      address: '789 Office Rd, City',
      workingHours: '8 AM - 4 PM',
      work: 'Cleaner',
      image: 'https://via.placeholder.com/150',
      salary: '$12/hour',
      jobType: 'Part-time',
    },
    // Add more job data
  ];

  // Handle search functionality
  const handleSearch = (filters) => {
    console.log('Search Filters:', filters);
    // Implement search logic here (e.g., filter jobs based on filters)
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Find Jobs</h1>
      <SearchBar onSearch={handleSearch} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        {jobs.map((job, index) => (
          <WorkerCard key={index} {...job} />
        ))}
      </div>
    </div>
  );
};

export default GetHired;