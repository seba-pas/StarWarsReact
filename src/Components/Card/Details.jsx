import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getCharacterById } from "../../Redux/Actions";

const Details = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const character = useSelector((state) => state.character);

  //manage url for image
  let imgUrlSplit = character?.url?.split("/");
  var idFromUrl = imgUrlSplit && imgUrlSplit[imgUrlSplit.length - 2];
  var baseImgUrl = "https://starwars-visualguide.com/assets/img/characters/";
  const img = `${baseImgUrl}${idFromUrl}.jpg`;

  useEffect(() => {
    dispatch(getCharacterById(id));
  }, [dispatch, id]);

  console.log(character);
  /*
films, homeworld, species, starships, vehicles+
  */

  return (
    <div className="container">
      {!!img && idFromUrl !== undefined ? (
        <img src={img} alt="no img" />
      ) : (
        "loading img..."
      )}
      <h1>{character.name}</h1>
      <h3>birth_year: {character.birth_year}</h3>
      <h3>gender:{character.gender}</h3>
      <h3>eye_color: {character.eye_color}</h3>
      <h3>hair_color:{character.hair_color}</h3>
      <h3>mass: {character.mass}</h3>
      <h3>height: {character.height}</h3>
      <h3>skin_color{character.skin_color}</h3>
    </div>
  );
};

export default Details;
