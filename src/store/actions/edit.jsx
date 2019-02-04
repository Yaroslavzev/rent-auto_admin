import * as actionType from './actionTypes'; 
import axios from 'axios';

export const submitStart = ()=>{
    return {
        type: actionType.SUBMIT_START
    }
}

export const submitFail = (error) => {
    return {
        type: actionType.SUBMIT_FAIL, 
        error: error
    }
}

export const submitSuccess = (formData)=>{
    return {
        type: actionType.SUBMIT_SUCCESS,
        data: formData
    }
}

export const submit = (data) => {
    return dispatch=>{
        dispatch(submitStart()); 
        const sendData = JSON.stringify(data);
        axios.post('https://api.rent-auto.biz.tm/info_models', sendData).then(response=>{
            console.log(response.data)
        }).catch(error=>{
            dispatch(submitFail(error))
        })
    }
}