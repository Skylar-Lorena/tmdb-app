import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage'; // Import the HomePage component
import MovieList from './MovieList'; // Assuming you have a MoviesList component
import KenyaFlixxNavbar from './KenyaFlixxNavbar'; // Import the search navbar component

const App = () => {
  const [searchTerm, setSearchTerm] = useState(''); // State for search term

  const handleSearchFromApp = (term) => {
    setSearchTerm(term); // Update search term state
  };

  return (
    <BrowserRouter>
      <div className="App">
        <KenyaFlixxNavbar onSearch={handleSearchFromApp} />  {/* Pass handleSearchFromApp function */}
        <Routes>
          <Route path="/" element={<HomePage />} />  {/* Home page at root */}
          <Route path="/movies" element={<MovieList searchTerm={searchTerm} />} /> {/* Pass searchTerm prop to MovieList */}
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
