import axios from "axios";

// CHARACTERS
export function getCharacters(page) {
  return async function (dispatch) {
    let json = await axios.get(`http://localhost:3001/characters?page=${page}`);

    return dispatch({
      type: "GET_CHARACTERS",
      payload: json.data,
    });
  };
}
export function getAllCharacters(page) {
  return async function (dispatch) {
    let json = await axios.get(
      `http://localhost:3001/characters/all?page=${page}`
    );

    return dispatch({
      type: "GET_ALL_CHARACTERS",
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

export function setCharacter() {
  return async function (dispatch) {
    return dispatch({
      type: "SET_CHARACTER",
    });
  };
}

//STARSHIPS

export function getAllStarships(page) {
  return async function (dispatch) {
    let json = await axios.get(`http://localhost:3001/starships/?page=${page}`);
    return dispatch({
      type: "GET_ALL_STARSHIPS",
      payload: json.data,
    });
  };
}

export function getStarshipById(id) {
  return async function (dispatch) {
    let json = await axios.get(`http://localhost:3001/starships/${id}`);
    return dispatch({
      type: "GET_STARSHIP_BY_ID",
      payload: json.data,
    });
  };
}
