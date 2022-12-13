import {SUBMIT , DELETE_FAVORITE , DELETE_MOVIE , ADD_FAVORITE, CHANGE_BUTTON_NAME } from './actiontypes'
import axios from 'axios'
export function searchMovies(movies) {
    return {
      type: SUBMIT,
      payload: {
        movies: movies,
      },
    };
  }
  
  export function fetchMovies(name) {
    return (dispatch) => {
      return axios
        .get(`http://www.omdbapi.com/?s=${name}&apikey=${api}`)
        .then(({ data }) => {
          dispatch(searchMovies(data.Search));
          console.log(data.Search);
        })
        .catch((err) => {
          alert("Movies not found", err);
        });
    };
  }

export function addFavoriteList(id) {
  return {
    type: ADD_FAVORITE,
    payload: {
    imdbID:id,
    },
  };
}
export function removeMovieFromFavoriteList(id) {
    return {
      type: DELETE_FAVORITE,
      payload: {
        id: id,
      },
    };
  }
  // export function changeButtonName(buttonTextId) {
  //   return {
  //     type: CHANGE_BUTTON_NAME,
  //     payload: {
  //       buttonTextId: buttonTextId,
  //     },
  //   };
  // }
  export function deleteMovie(id){
      return{
          type : DELETE_MOVIE,
          payload: {
              id: id,
          },
      };
  }