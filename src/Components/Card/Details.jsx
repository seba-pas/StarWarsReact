import React, { useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { getCharacterById, setCharacter } from "../../Redux/Actions";
import ClipLoader from "react-spinners/ClipLoader";

import "./Details.scss";

const Details = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const character = useSelector((state) => state.character);
  const history = useHistory();
  const gState = useSelector((state) => state);
  let [color, setColor] = useState("#000")
  

  //manage url for image
  let imgUrlSplit = character?.url?.split("/");
  var idFromUrl = imgUrlSplit && imgUrlSplit[imgUrlSplit.length - 2];
  var baseImgUrl = "https://starwars-visualguide.com/assets/img/characters/";
  const img = `${baseImgUrl}${idFromUrl}.jpg`;

  //manage url for starships
  useEffect(() => {
    dispatch(getCharacterById(id));
    return () => {
      dispatch(setCharacter())
    }
  }, [dispatch, id]);

  /*
films, homeworld, species, starships, vehicles+
  */
  const char = gState?.characters.find((e) => e.id === parseInt(id));
  const starships = char.starships? char.starships : 'n/a';
  const vehicles = char.vehicles? char.vehicles : 'n/a';
  const films = char.films;
  const homeworld = char.homeworld

  return (
    <div className="container">
      <div className="imgcontainer">
        {!!img && idFromUrl !== undefined ? (
          <img src={img} alt="no img" />
        ) : (
         <div className='spinnerImg'>
          <ClipLoader color={color} size={150} />
         </div>
        )}
      </div>

      {character.gender ? (
        <div className="info">
          <div>
            {" "}
            <h3>birth_year: {character.birth_year}</h3>
          </div>
          <div>
            {" "}
            <h3>gender:{character.gender}</h3>
          </div>
          <div>
            {" "}
            <h3>eye_color: {character.eye_color}</h3>
          </div>
          <div>
            {" "}
            <h3>hair_color:{character.hair_color}</h3>
          </div>
          <div>
            {" "}
            <h3>mass: {character.mass}</h3>
          </div>
          <div>
            {" "}
            <h3>height: {character.height}</h3>
          </div>
          <div>
            <h3>skin_color{character.skin_color}</h3>
          </div>
          <div>
            <h3>starships: {starships.join(', ')}</h3>
          </div>
          <div>
            <h3>films {films.join(', ')}</h3>
          </div>
          <div>
            <h3>Homeworld {homeworld}</h3>
          </div>
          <div>
            <h3>vehicles: {vehicles.join(', ')}</h3>
          </div>
          <button onClick={() => history.goBack()} className="back">
            Back
          </button>
        </div>
      ) : (
        <div className='spinnerInfo'>
          <ClipLoader color={color} size={150} />
         </div>
      )}
    </div>
  );
};

export default Details;
