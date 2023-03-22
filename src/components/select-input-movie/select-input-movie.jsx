import React from "react";
import "./select-input-movie.css";

export const SelectInputMovie = ({ selectOnchange }) => {
  return (
    <div className="mainContainerSelect">
      <span>выбор по жанру</span>
      <select name="genre" onChange={(e) => selectOnchange(e.target.value)}>
        <option value="">Все</option>
        <option value="Comedy">Comedy</option>
        <option value="Action">Action</option>
        <option value="Crime">Crime</option>
        <option value="Thriller">Thriller</option>
        <option value="Drama">Drama</option>
        <option value="Sci-Fi">Sci-Fi</option>
        <option value="Mystery">Mystery</option>
        <option value="Western">Western</option>
        <option value="Family">Family</option>
        <option value="Romance">Romance</option>
      </select>
    </div>
  );
};
