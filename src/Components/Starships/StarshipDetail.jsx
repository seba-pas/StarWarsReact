import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getStarshipById, setStarshipDetails } from "../../Redux/Actions";
import { useParams } from "react-router-dom";

const StarshipDetail = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { id } = useParams();
  const starship = useSelector((state) => state.starship);

  useEffect(() => {
    dispatch(getStarshipById(id));

    return () => {
      dispatch(setStarshipDetails());
    };
  }, [dispatch, id]);

  return (
    <div className="container">
      <div className="img">
        <img
          src={`https://starwars-visualguide.com/assets/img/starships/${id}.jpg`}
          alt=""
          onError={(e) => {
            e.target.onerror = null;
            e.target.src =
              "https://starwars-visualguide.com/assets/img/placeholder.jpg";
          }}
        />
      </div>

      <div className="info">
        <h4>name: {starship.name}</h4>
        <h4>starship_class: {starship.starship_class}</h4>
        <h4>manufacturer: {starship.manufacturer}</h4>
        <h4>model: {starship.model}</h4>
        <h4>cost_in_credits: {starship.cost_in_credits}</h4>
        <h4>length: {starship.length}</h4>
        <h4>passengers: {starship.passengers}</h4>
        <h4>Cargo Capacity: {starship.cargo_capacity}</h4>
        <h4>crew: {starship.crew}</h4>
        <h4>consumables: {starship.consumables}</h4>
        <h4>max_atmosphering_speed: {starship.max_atmosphering_speed}</h4>
        <h4>hyperdrive_rating: {starship.hyperdrive_rating}</h4>
        <h4>films: {starship.films}</h4>
        <h4>pilots: {starship.pilots}</h4>

        <button
          onClick={() => history.goBack()}
          style={{ color: "white", backgroundColor: "black" }}
        >
          {" "}
          Back
        </button>
      </div>
    </div>
  );
};

export default StarshipDetail;
