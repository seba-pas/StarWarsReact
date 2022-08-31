const initialState = {
  characters: [],
  character: {},
  allCharacters: [],
  starships: [],
  starship: {},
  species: [],
  specie: {},
  films: [],
  film: {}
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    //--------------------------------------CHARACTERS--------------------------------------------------------
    case "GET_CHARACTERS":
      return {
        ...state,
        characters: action.payload,
      };
    case "GET_ALL_CHARACTERS":
      return {
        ...state,
        allCharacters: action.payload,
      };

    case "GET_CHARACTER_BY_ID":
      return {
        ...state,
        character: action.payload,
      };
    case "SET_CHARACTER":
      return {
        ...state,
        character: {},
      };
    //------------------------------------------STARSHIPS ----------------------------------------
    case "GET_STARSHIP_BY_ID":
      return {
        ...state,
        starship: action.payload,
      };
    case "SET_STARSHIP_DETAILS":
      return {
        ...state,
        starship: initialState.starship,
      };

    case "GET_ALL_STARSHIPS":
      return {
        ...state,
        starships: action.payload,
      };
    //------------------------------------------SPECIES --------------------------------
    case "GET_ALL_SPECIES":
      return {
        ...state,
        species: action.payload,
      };
    case "GET_SPECIE_BY_ID":
      return {
        ...state,
        specie: action.payload,
      };
    case "SET_SPECIE_DETAILS":
      return {
        ...state,
        specie: initialState.specie,
      };
    //------------------------------------------FILMS --------------------------------
    case "GET_ALL_FILMS":
      return {
        ...state,
        films: action.payload,
      };
    case "GET_FILM_BY_ID":
      return {
        ...state,
        film: action.payload,
      };
    case "SET_FILM_DETAILS":
      return {
        ...state,
        film: initialState.film,
      };

    default:
      return {
        ...state,
      };
  }
}
