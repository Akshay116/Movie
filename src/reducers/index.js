import { combineReducers } from "redux";

import { ADD_MOVIES ,ADD_FAVOURITE, REMOVE_FROM_FAVOURITES,SET_SHOW_FAVOURITES} from "../actions";

const intialMoviesState = {
    list:[],
    favourites:[],
    showFavourites: false
};
export  function movies (state = intialMoviesState,action){


 switch (action.type){
     case ADD_MOVIES:
      return {
          ...state,
          list: action.movies
      }

      case ADD_FAVOURITE:
          return {
              ...state,
              favourites: [action.movie,...state.favourites]
          }
      case REMOVE_FROM_FAVOURITES:
          const filteredArray = state.favourites.filter(
              movie => movie.Title !== action.movie.Title
          );
          return {
              ...state,
              favourites:filteredArray
          };
       case SET_SHOW_FAVOURITES:
           return{
               ...state,
               showFavourites:action.val
           }
        default:
            return state;
          


 }
}

const initailSearchState = { 
    result:{}
};
export function search(state = initailSearchState, action){
    return state;
}

// const initialRootState ={
//     movies:intialMoviesState,
//     search: initailSearchState
// }
// export default function rootReducer (state = initialRootState,action){
//     return {
//       movies: movies(state.movies,action),
//       search: search(state.search,action)

//     }
// }
// ++++ this can be handled by combine reducer pakage by redux internally 

export default combineReducers({
    movies,
    search
})
