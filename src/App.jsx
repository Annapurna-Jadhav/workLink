import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hire from './pages/Hire';
import GetHired from './pages/GetHired';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/hire" element={<Hire />} />
        <Route path="/get-hired" element={<GetHired />} />
      </Routes>
    </Router>
  );
};

export default App;