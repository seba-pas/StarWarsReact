import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getSpeciesById, setSpeciesDetails } from "../../Redux/Actions";
import { useParams } from "react-router-dom";

const StarshipDetail = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { id } = useParams();
  const specie = useSelector((state) => state.specie);

  useEffect(() => {
    dispatch(getSpeciesById(id));

    return () => {
      dispatch(setSpeciesDetails());
    };
  }, [dispatch, id]);

  console.log(specie);
  return (
    <div className="container">
      <div className="img">
        <img
          src={specie.image}
          alt=""
          onError={(e) => {
            e.target.onerror = null;
            e.target.src =
              "https://starwars-visualguide.com/assets/img/placeholder.jpg";
          }}
        />
      </div>

      <div className="info">
        <h4>average_height: {specie.average_height}</h4>
        <h4>average_lifespan: {specie.average_lifespan}</h4>
        <h4>classification: {specie.classification}</h4>
        <h4>designation: {specie.designation}</h4>
        <h4>eye_colors: {specie.eye_colors}</h4>
        <h4>films: {specie.films}</h4>
        <h4>hair_colors: {specie.hair_colors}</h4>
        <h4>homeworld: {specie.homeworld}</h4>
        <h4>language: {specie.language}</h4>
        <h4>name: {specie.name}</h4>
        <h4>people: {specie.people}</h4>
        <h4>skin_colors: {specie.skin_colors}</h4>
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
