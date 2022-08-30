import React from "react";
import "./starshipCard.scss";
import { Link } from "react-router-dom";

export default function starshipCard({ name, image, credits, id }) {
  return (
    <Link to={`/starships/${id}`}>
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
          <h1>{name}</h1>
          <h4>{credits}</h4>
        </div>
      </div>
    </Link>
  );
}
