import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getStarshipById, getAllStarships } from "../../Redux/Actions";
import StarshipCards from "./StarshipsCards";

const StarshipsHome = () => {
  const dispatch = useDispatch();
  let starships = useSelector((state) => state.starships);
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(getAllStarships(page));
  }, [dispatch, page]);

  return (
    <div>
      <div>{starships? <StarshipCards currentStarships={starships} /> : <h1>LOADING</h1>}</div>{" "}
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

export default StarshipsHome;
