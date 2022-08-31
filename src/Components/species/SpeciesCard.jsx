import React from "react";
import "./speciesCard.scss";
import { Link } from "react-router-dom";

export default function SpeciesCard({ name, homeworld, image, id }) {
  return (
    <Link to={`/species/${id}`}>
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
          <h4>{homeworld}</h4>
        </div>
      </div>
    </Link>
  );
}
