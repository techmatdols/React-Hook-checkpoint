import React from 'react';

const Filter = ({ onTitleChange, onRatingChange }) => {
  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Filter by title"
        onChange={event => onTitleChange(event.target.value)}
      />
      <input
        type="number"
        placeholder="Filter by rating"
        onChange={event => onRatingChange(Number(event.target.value))}
      />
    </div>
  );
};

export default Filter;
