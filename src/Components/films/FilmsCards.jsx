import React from "react";
import FilmsCard from "./FilmsCard";
import './filmsCards.scss'

const FilmsCards = ({ currentFilms }) => {
  return (
    <div className='tarjetas'>
      {currentFilms?.map((e) => {
        return <FilmsCard key={e.id} title={e.title} episode={e.episode_id} image={e.image} id={e.id} director={e.director} date={e.release_date}/>;
      })}
    </div>
  );
};


export default FilmsCards;
