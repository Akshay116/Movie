import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import './index.css';
import App from './components/App';
import movies from './reducers';


const store = createStore(movies);//create store (states intial)
console.log('store',store);
console.log('Before_State',store.getState());

store.dispatch({ // sends action to reducers

   type: 'ADD_MOVIES',
   movies: [{name:'Superman'}]

});
console.log('After_State',store.getState());

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

