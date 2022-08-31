import React from "react";
import SpeciesCard from "./SpeciesCard";
import './speciesCards.scss'

const SpeciesCards = ({ currentSpecies }) => {
  return (
    <div className='tarjetas'>
      {currentSpecies?.map((e) => {
        return <SpeciesCard key={e.id} name={e.name} homeworld={e.homeworld} image={e.image} id={e.id} />;
      })}
    </div>
  );
};


export default SpeciesCards;
