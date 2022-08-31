import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getFilmById, setFIlmsDetails, getAllFilms } from "../../Redux/Actions";
import { useParams } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";

const StarshipDetail = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { id } = useParams();
  const film = useSelector((state) => state.film);
  const films = useSelector((state) => state.films);
  let [color, setColor] = useState("#000");

  useEffect(() => {
    dispatch(getFilmById(id));

    return () => {
      dispatch(setFIlmsDetails());
    };
  }, [dispatch, id]);

  const movie = films?.find((e) => e.id === parseInt(id));


  return (
    <div className="container">
      {film.title && movie.characters? (
        <div>
          <div className="img">
            <img
              src={movie?.image}
              alt=""
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  "https://starwars-visualguide.com/assets/img/placeholder.jpg";
              }}
            />
          </div>

          <div className="info">
            <h4>title: {film?.title}</h4>
            <h4>episode_id: {film?.episode_id}</h4>
            <h4>director: {film?.director}</h4>
            <h4>producer: {film?.producer}</h4>
            <h4>release_date: {film?.release_date}</h4>
            <h4>characters: {movie?.characters.join(", ")}</h4>
            <h4>planets: {movie?.planets.join(", ")}</h4>
            <h4>starships: {movie?.starships.join(", ")}</h4>
            <h4>vehicles: {movie?.vehicles.join(", ")}</h4>
            <div>
              <p>opening_crawl: {film?.opening_crawl}</p>
            </div>

            <button
              onClick={() => history.goBack()}
              style={{ color: "white", backgroundColor: "black" }}
            >
              {" "}
              Back
            </button>
          </div>
        </div>
      ) : (
        <div className="spinnerInfo">
          <ClipLoader color={color} size={150} />
        </div>
      )}
    </div>
  );
};

export default StarshipDetail;
