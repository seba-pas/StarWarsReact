import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllFilms } from "../../Redux/Actions";
import FilmsCards from "./FilmsCards";
import ClipLoader from "react-spinners/ClipLoader";

const SpeciesHome = () => {
  const dispatch = useDispatch();
  let films = useSelector((state) => state.films);
  let [color, setColor] = useState("#000");

  useEffect(() => {
    dispatch(getAllFilms());
  }, [dispatch]);
  console.log(films);
  return (
    <div>
      {films.length > 0 ? (
        <FilmsCards currentFilms={films} />
      ) : (
        <div
          className="spinnerInfo"
          style={{
            display: "flex",
            marginLeft: '30vw',
            marginTop: '20vh',
            flexDirection: "column",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          {/* <h1>This May Take a few minutes: May the force be with you!</h1> */}
          <ClipLoader color={color} size={150} />
          <h4> Initializing App..</h4>
        </div>
      )}
    </div>
  );
};

export default SpeciesHome;
