import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { getCharacterById, setCharacter } from "../../Redux/Actions";
import "./Details.scss";

const Details = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const character = useSelector((state) => state.character);
  const history = useHistory();
  const gState = useSelector((state) => state);

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

  return (
    <div className="container">
      <div className="imgcontainer">
        {!!img && idFromUrl !== undefined ? (
          <img src={img} alt="no img" />
        ) : (
          "loading img..."
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
            <h3>vehicles: {vehicles.join(', ')}</h3>
          </div>
          <button onClick={() => history.goBack()} className="back">
            Back
          </button>
        </div>
      ) : (
        "Loading..."
      )}
    </div>
  );
};

export default Details;
