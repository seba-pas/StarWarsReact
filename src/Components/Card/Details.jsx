import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getCharacterById } from "../../Redux/Actions";

const Details = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const character = useSelector((state) => state.character);

  //manage url for image
  let imgUrlSplit = character?.url?.split("/");
  var idFromUrl = imgUrlSplit && imgUrlSplit[imgUrlSplit.length - 2];
  var baseImgUrl = "https://starwars-visualguide.com/assets/img/characters/";
  const img = `${baseImgUrl}${idFromUrl}.jpg`;

  useEffect(() => {
    dispatch(getCharacterById(id));
  }, [dispatch, id]);

  console.log(character);

  return (
    <div className="container">
      {!!img && idFromUrl !== undefined ? (
        <img src={img} alt="no img" />
      ) : (
        "loading img..."
      )}
    </div>
  );
};

export default Details;
