const initialState = {
  characters: [],
  character: {},
  allCharacters: [],
  starships: [],
  starship: {} 
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
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
      case 'GET_STARSHIP_BY_ID':
        return {
          ...state,
          starship: action.payload
        }
        case 'GET_ALL_STARSHIPS':
          return {
            ...state,
            starships: action.payload
          }

    default:
      return {
        ...state,
      };
  }
}