import React from 'react';
import ReactDOM from 'react-dom';
import { createStore,applyMiddleware } from 'redux';
import './index.css';
import App from './components/App';
import rootReducer from './reducers';

 // used currying functiom(a,b,c)
 //using middleware 
 // redux internal call is like logger(obj)(next)(action)
const logger = function({dispatch,getState}){
  return function(next){
    return function(action){
     // midlleware code 
     console.log('ACTION_TYPE = ',action.type);
     next(action);
    }

  }
}

const store = createStore(rootReducer,applyMiddleware(logger));//create store (states intial)
console.log('store',store);
// console.log('Before_State',store.getState());

// store.dispatch({ // sends action to reducers

//   type: 'ADD_MOVIES',
//   movies: [{name:'Superman'}]

// });
// console.log('After_State',store.getState());

ReactDOM.render(
  <React.StrictMode>
    <App store ={store} />
  </React.StrictMode>,
  document.getElementById('root')
);

