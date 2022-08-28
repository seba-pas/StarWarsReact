import React, { useEffect } from "react";
import {getCharacters} from "../../Redux/Actions";
import { useDispatch, useSelector } from "react-redux";
import Cards from "../Card/Cards";

export default function Home() {
  const dispatch = useDispatch();
  const characters = useSelector((state) => state.characters);

  useEffect(() => {
    dispatch(getCharacters());
  }, [dispatch]);
  // console.log(characters)

  return (
    <div>{characters ? <Cards currentChars={characters} /> : "Loading..."}</div>
  );
}
