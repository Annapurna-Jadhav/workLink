import React from 'react';

const WorkerCard = ({ name, contact, address, workingHours, work, image, salary, jobType }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <img src={image} alt={name} className="w-full h-48 object-cover rounded-t-lg" />
      <h2 className="text-xl font-bold mt-4">{name}</h2>
      <p className="text-gray-600">{contact}</p>
      <p className="text-gray-600">{address}</p>
      <p className="text-gray-600">{workingHours}</p>
      <p className="text-gray-600">{work}</p>
      {salary && <p className="text-gray-600">Salary: {salary}</p>}
      {jobType && <p className="text-gray-600">Job Type: {jobType}</p>}
    </div>
  );
};

export default WorkerCard;