import React from "react";
import StarshipCard from "./StarshipCard";
import './starshipCards.scss'

const StarshipCards = ({ currentStarships }) => {
  return (
    <div className='tarjetas'>
      {currentStarships?.map((e) => {
        return <StarshipCard key={e.id} name={e.name} credits={e.cost_in_credits} image={e.image} id={e.id} />;
      })}
    </div>
  );
};

export default StarshipCards;
