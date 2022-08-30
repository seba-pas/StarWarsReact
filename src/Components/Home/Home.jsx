import React, { useEffect, useState } from "react";
import { getCharacters } from "../../Redux/Actions";
import { useDispatch, useSelector } from "react-redux";
import Cards from "../Card/Cards";
import './Home.scss'

export default function Home() {
  const dispatch = useDispatch();
  let characters = useSelector((state) => state.characters);
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(getCharacters(page));
    
  }, [dispatch, page]);
  // console.log(characters)

  

  return (
    <div className='body'>
      <div className='cards'>
        {characters ? <Cards currentChars={characters} /> : "Loading..."}
      </div>

      <div className="pages">
        <button onClick={() => setPage(page - 1)}>Prev</button>
        <button onClick={() => setPage(1)}>1</button>
        <button onClick={() => setPage(2)}>2</button>
        <button onClick={() => setPage(3)}>3</button>
        <button onClick={() => setPage(4)}>4</button>
        <button onClick={() => setPage(5)}>5</button>
        <button onClick={() => setPage(6)}>6</button>
        <button onClick={() => setPage(7)}>7</button>
        <button onClick={() => setPage(8)}>8</button>
        <button onClick={() => setPage(9)}>9</button>
        <button onClick={() => setPage(page + 1)}>Next</button>
      </div>
    </div>
  );
}
