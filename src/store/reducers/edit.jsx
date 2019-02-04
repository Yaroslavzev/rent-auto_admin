import * as actionType from '../actions/actionTypes';
import {updatedObject} from '../utility';
const initialState = { 
    loading: false, 
    error: null,
    data: null,
}

const submitStart = (state, action) => {
    return updatedObject(state, {error: null, loading: true})
}

const submitFail = (state, action) => {
    return updatedObject(state, {error: action.error, loading: false})
}

const submitSuccess = (state, action) =>{
    return updatedObject(state, {error: null, loading: false, data: action.data})
}


const edit = (state = initialState, action)=>{
    switch(action.type){
        case actionType.SUBMIT_START:
        return submitStart(state, action); 
        case actionType.SUBMIT_FAIL:
        return submitFail(state, action); 
        case actionType.SUBMIT_SUCCESS:
        return submitSuccess(state, action);
        default: return state; 
    }
}

export default edit; 