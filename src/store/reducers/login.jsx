import * as actionType from '../actions/actionTypes';
import {updatedObject} from '../utility';
const initialState = {
    token: null, 
    email: null,
    error: null, 
    loading: null, 
}

const authStart =(state, action)=>{
    return updatedObject(state, {error: null, loading: true})
}

const authSuccess=(state, action)=>{
    return updatedObject(state, {
        token: action.idToken, 
        email: action.email,
        error: null, 
        loading: false, 
    })
}

const authFail = (state, action)=>{
    return updatedObject(state, {
        error: action.error, 
        loading: false
    })
}

const logout=(state, action)=>{
    return updatedObject(state, {token: null })
}

const login = (state=initialState, action) => {
   switch(action.type){
    case actionType.AUTH_START: 
    return authStart(state, action);
    case actionType.AUTH_SUCCESS: 
    return authSuccess(state, action);
    case actionType.AUTH_FAIL: 
    return authFail(state, action);
    case actionType.AUTH_LOGOUT: 
    return logout(state, action)
    default: return state;
   }
  
};

export default login;