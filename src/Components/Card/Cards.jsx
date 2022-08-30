import React from "react";
import Card from "./Card";
import './Cards.scss'

const Cards = ({ currentChars }) => {
  return (
    <div className='tarjetas'>
      {currentChars?.map((e) => {
        return <Card key={e.id} name={e.name} homeworld={e.homeworld} image={e.image} id={e.id} />;
      })}
    </div>
  );
};

export default Cards;
