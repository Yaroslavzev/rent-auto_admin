import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import login from './login';
import edit from './edit'

export default combineReducers({
  routing: routerReducer,
  login, 
  edit
});
