import React, { useState } from "react";
import "./search-input.css";

export const SearchInput = ({ onChange }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    setTimeout(() => onChange(e.target.value), 1000);
  };
  return (
    <input
      className="input"
      value={searchTerm}
      onChange={handleChange}
      placeholder="Поиск фильма"
      type="text"
    />
  );
};
