import React, { useEffect, useState } from "react";
import { getCharacters } from "../../Redux/Actions";
import { useDispatch, useSelector } from "react-redux";
import Cards from "../Card/Cards";

export default function Home() {
  const dispatch = useDispatch();
  let characters = useSelector((state) => state.characters);
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(getCharacters(page));
   
  }, [dispatch, page]);
  // console.log(characters)




  return (
    <div>
      {characters ? <Cards currentChars={characters} /> : "Loading..."}
      <div>
        <button onClick={()=> setPage(2)}>2</button>
  
      
      </div>
    </div>
  );
}
