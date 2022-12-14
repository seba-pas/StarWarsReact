import React from "react";
import "./Card.scss";
import { Link } from "react-router-dom";


export default function Card({ name, image, homeworld, id }) {

  return (
    <Link to={`/characters/${id}`}>
      <div className="container_card">
        <div className='container_img'>
          <img src={image} alt="no-img" onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "https://starwars-visualguide.com/assets/img/placeholder.jpg";
            }}/>
        </div>
        <div className="text">
          <h1>{name}</h1>
          <h4>{homeworld}</h4>
        </div>
      </div>
    </Link>
  );
}
