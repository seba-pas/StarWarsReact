import React from "react";
import "./filmsCard.scss";
import { Link } from "react-router-dom";

export default function FilmsCard({
  title,
  episode,
  date,
  id,
  image,
  director,
}) {
  return (
    <Link to={`/films/${id}`}>
      <div className="container_card">
        <div className="container_img">
          <img
            src={image}
            alt="no-img"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "https://starwars-visualguide.com/assets/img/placeholder.jpg";
            }}
          />
        </div>
        <div className="text">
          <h1>{title}</h1>
          <h4>Episode: {episode}</h4>
          <h4>Director: {director}</h4>
          <h4>Release Date: {date}</h4>
        </div>
      </div>
    </Link>
  );
}
