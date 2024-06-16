import React, { useState, useEffect } from 'react';
import './App.css';
import MovieBox from './MovieBox'; // Assuming MovieBox is a separate component
import KenyaFlixxNavbar from './KenyaFlixxNavbar';

const API_KEY = '1bf42a6cc2f7fb9a6ae954dad24572e0'; // Replace with your actual API key

const MovieList = ({ searchTerm }) => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch movies on component mount (potentially adjust for searches)
  useEffect(() => {
    const fetchMovies = async () => {
      setIsLoading(true); // Set loading state to true
      setError(null); // Clear any previous errors

      const url = searchTerm
        ? `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${searchTerm}&page=1`
        : `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;

      try {
        const response = await fetch(url);
        const data = await response.json();
        setMovies(data.results); // Update movies based on search results
      } catch (error) {
        console.error('Error fetching movies:', error);
        setError(error); // Set error state
      } finally {
        setIsLoading(false); // Set loading state to false after all actions
      }
    };

    fetchMovies();
  }, [searchTerm]); // Update effect on searchTerm change

  // Display loading message while data is being fetched
  if (isLoading) {
    return <p>Loading movies...</p>;
  }

  // Display error message if there's an error
  if (error) {
    return <p>Error: {error.message}</p>;
  }

  // Conditionally render movie list only when movies are available
  // Filter movies based on searchTerm if provided
  const filteredMovies = searchTerm ? movies.filter((movie) => movie.title.toLowerCase().includes(searchTerm.toLowerCase())) : movies;

  return (
    <>
      <h1 className="text-center">Popular Movies</h1>
      {filteredMovies && filteredMovies.length > 0 && (
        <div className="movies-grid">
          {filteredMovies.map((movie, index) => (
            <div key={movie.id} className="movie-item">
              <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
              <h2>{movie.title}</h2>
              <p>{movie.overview.slice(0, 100)}...</p>  {/* Truncate overview */}
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default MovieList;
