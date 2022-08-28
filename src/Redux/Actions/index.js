import axios from "axios";

export function getCharacters() {
  return async function (dispatch) {
    let json = await axios.get("http://localhost:3001/characters");

    return dispatch({
      type: "GET_CHARACTERS",
      payload: json.data,
    });
  };
}

export function getCharacterById(id) {
  return async function (dispatch) {
    let json = await axios.get(`http://localhost:3001/characters/${id}`);

    return dispatch({
      type: "GET_CHARACTER_BY_ID",
      payload: json.data,
    });
  };
}
