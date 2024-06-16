import React from 'react';
import KenyaFlixxNavbar from './KenyaFlixxNavbar'; // Import the Navbar component
import { Link } from 'react-router-dom'; // Import Link for navigation

const HomePage = () => {
  const logoSrc = './public/logo.png'
  return (
    <div className="home-page">
      <KenyaFlixxNavbar />  {/* Add the Navbar component */}
      <div className="intro">
      <img src={logoSrc} alt="Kenya Flixx Logo" className="logo" width={300}/>
        <h1>Welcome to Kenya Flixx!</h1>
        <p>Explore a vast collection of popular movies.</p>
        <Link to="/movies" className="btn btn-primary explore-btn">Explore Movies</Link>  {/* Use Link component */}
      </div>
    </div>
  );
};

export default HomePage;
