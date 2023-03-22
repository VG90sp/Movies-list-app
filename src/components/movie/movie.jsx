import React, { useState } from "react";
import "./movie.css";

export const Movie = ({ title, image, year, genres, synopsis }) => {
  const [visibleInfo, setVisibleInfo] = useState();
  return (
    <div className="mainContainer">
      <h2 className="title">{title || "название фильма"}</h2>
      <h3 className="moreInfo" onClick={() => setVisibleInfo((prev) => !prev)}>
        {!visibleInfo ? "больше о фильме..." : "скрыть информацию"}
      </h3>

      {visibleInfo && (
        <>
          <h3 className="infoTitle">{`Год: ${year || "-"}`}</h3>
          <h3 className="infoTitle">{"Жанр:"}</h3>
          <ul className="infoTitle">
            {genres.map((item, index) => {
              return <li key={index}>{item || "-"}</li>;
            })}
          </ul>
          <h3 className="infoTitle">{"Сюжет:"}</h3>
          <span>{`${synopsis || "-"}`}</span>
        </>
      )}
      <img src={image} alt="poster" className="img" />
    </div>
  );
};
