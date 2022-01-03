// {
//     type:'INCREASE_COUNT'
// }
// {
//     tpe:'DECREASE_COUNT'
// }

//action types 
export const ADD_MOVIES ='ADD_MOVIES';
export const ADD_FAVOURITE ='ADD_FAVOURITE';

//action creators
export function addMovies(movies){
    return{
       type: ADD_MOVIES,
       movies

    }
}
//action favourites
export function addfavourite(movie){
    return{
       type: ADD_FAVOURITE,
       movie
    }
}
