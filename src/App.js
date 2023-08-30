 import React, { useState } from 'react';
import MovieList from './Components/MovieList/MovieList';
import Filter from './Components/Filter/Filter';

const App = () => {
  const [movies] = useState([
    // Your initial movie data here
  ]);

  const [titleFilter, setTitleFilter] = useState('');
  const [ratingFilter, setRatingFilter] = useState(null);

  const filteredMovies = movies.filter(movie => {
    return (
      movie.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
      (ratingFilter === null || movie.rating >= ratingFilter)
    );
  });

  const handleTitleChange = newTitle => {
    setTitleFilter(newTitle);
  };

  const handleRatingChange = newRating => {
    setRatingFilter(newRating);
  };

  return (
    <div className="app">
      <h1>Movie App</h1>
      <Filter
        onTitleChange={handleTitleChange}
        onRatingChange={handleRatingChange}
      />
      <MovieList movies={filteredMovies} />
    </div>
  );
};

export default App;
