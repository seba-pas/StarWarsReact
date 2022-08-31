import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllSpecies } from "../../Redux/Actions";
import SpeciesCards from "./SpeciesCards";

const SpeciesHome = () => {
  const dispatch = useDispatch();
  let species = useSelector((state) => state.species);
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(getAllSpecies(page));
  }, [dispatch, page]);



  return (
    <div>
      <div>
        {species ? (
          <SpeciesCards currentSpecies={species} />
        ) : (
          <h1>LOADING</h1>
        )}
      </div>{" "}
      <div className="pages">
        <button onClick={() => setPage(page - 1)}>Prev</button>
        <button onClick={() => setPage(1)}>1</button>
        <button onClick={() => setPage(2)}>2</button>
        <button onClick={() => setPage(3)}>3</button>
        <button onClick={() => setPage(4)}>4</button>
        <button onClick={() => setPage(page + 1)}>Next</button>
      </div>
    </div>
  );
};

export default SpeciesHome;
