import "./movie.styles.css";
import React, { useEffect, useState } from "react";
import { Movie } from "../components/movie/movie";
import { SearchInput } from "../components/search-input/search-input";
import { SelectInputMovie } from "../components/select-input-movie/select-input-movie";

export default function MoviePage() {
  const [dataMovies, setDataMovies] = useState([]);
  const [dropDownValue, setDropdownValue] = useState("");
  const [searchValue, setSearchValue] = useState("");

  const getMovies = (value, dropDownValue) => {
    try {
      fetch(
        `https://yts.mx/api/v2/list_movies.json?query_term=${value}&genre=${dropDownValue}`
      )
        .then((response) => response.json())
        .then((data) => setDataMovies(data.data.movies));
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getMovies(searchValue, dropDownValue);
  }, [dropDownValue, searchValue]);

  return (
    <div className="movieContainer">
      <SearchInput onChange={setSearchValue} />
      <SelectInputMovie selectOnchange={setDropdownValue} />
      {dataMovies
        ? dataMovies.map((item, index) => {
            return (
              <Movie
                key={index}
                title={item.title}
                image={item.medium_cover_image}
                year={item.year}
                genres={item.genres}
                synopsis={item.summary}
              />
            );
          })
        : "ошибка.кина не будет"}
    </div>
  );
}
