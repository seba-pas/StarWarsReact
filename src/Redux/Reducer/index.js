const initialState = {
  characters: [],
  character: {}
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_CHARACTERS":
        
      return {
        ...state,
        characters: action.payload,
      };
      case "GET_CHARACTER_BY_ID":
        return {
          ...state,
          character: action.payload
        }

    default:
      return {
        ...state,
      };
  }
}
