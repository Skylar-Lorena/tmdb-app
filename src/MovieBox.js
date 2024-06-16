import React from 'react';

const MovieBox = ({ movie }) => {
  // Check if movie data exists before rendering
  if (!movie) return null; // Render nothing if no movie data

  const { title, poster_path, vote_average, release_date, overview } = movie;
  const imageUrl = `https://image.tmdb.org/t/p/w500${poster_path}`; // Construct image URL with base path

  return (
    <div className="movie-box">
      <img src={imageUrl} alt={title} />
      <h2>{title}</h2>
      <p>Rating: {vote_average}</p>
      <p>Release Date: {release_date}</p>
      <p>{overview}</p>
    </div>
  );
};

export default MovieBox;
