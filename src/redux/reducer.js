import {SUBMIT , DELETE_FAVORITE , DELETE_MOVIE , ADD_FAVORITE, CHANGE_BUTTON_NAME } from './actiontypes'

const initialState = {
  allMovie: [],
  favMovie: [],
  // buttonTextId: 0
};

export const reducer = (state = initialState, action) => {
  let allMovie;
  let favMovie;
  let buttonTextId;
  switch (action.type) {
    case SUBMIT:
      allMovie = [...state.allMovie, action.payload];
      return { ...state, allMovie };
      
      case DELETE_MOVIE:
        allMovie = [];
        return { ...state, allMovie };

    case ADD_FAVORITE:
      const same = state.favMovie.find(
        (item) => item.imdbID === action.payload.imdbID
      );
      if (same === undefined) {
        favMovie = [...state.favMovie, action.payload];
        return { ...state, favMovie };
      }
    case CHANGE_BUTTON_NAME:
      // buttonTextId = [...state.buttonTextId, action.payload.buttonTextId];
      // return { ...state, buttonTextId};
    case DELETE_FAVORITE:
      favMovie = state.favMovie.filter(
        (item, index) => index !== action.payload
      );
      return { ...state, favMovie };
    default:
      return state;
  }
};
export default reducer;