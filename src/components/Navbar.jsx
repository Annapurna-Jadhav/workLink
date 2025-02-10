import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">WorkConnect</h1>
        <ul className="flex space-x-4">
          <li><a href="/" className="hover:text-gray-200">Home</a></li>
          <li><a href="/hire" className="hover:text-gray-200">Hire</a></li>
          <li><a href="/get-hired" className="hover:text-gray-200">Get Hired</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;