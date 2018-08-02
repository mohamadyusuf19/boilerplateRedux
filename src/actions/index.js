import { Alert } from 'react-native';
import { Actions } from 'react-native-router-flux';
export const PASSWORD_CHANGED = 'PASSWORD_CHANGED';
export const LOGIN_CHANGED = 'LOGIN_CHANGED';
export const GET_LOGIN_BEGIN = 'GET_LOGIN_BEGIN';
export const GET_LOGIN_FAILURE = 'GET_LOGIN_FAILURE';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

const url = 'http://211.11.1.101:8000/api/v1/auth'

export const loginChanged = (text) => {
    return {
        type: LOGIN_CHANGED,
        payload: text
    }
}

export const passwordChanged = (text) => {
    return {
        type: PASSWORD_CHANGED,
        payload: text
    }
}

export const postLogin = ({ email, password }) => {
    return dispatch => {
        dispatch(getLoginBegin())
            return fetch(url, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    email: email,
                    password: password
                })                
            })
                .then((response) => response.json())
                .then((data) => {
                    dispatch({
                        type: LOGIN_SUCCESS,
                        payload: data
                    })                    
                    if(!data.token) {
                        Alert.alert('Maaf Username dan Password Tidak Cocok')
                    } else if (data.token){
                        Actions.success()                
                    }
                })        
                .catch(error => dispatch(getLoginFailure(error)))
    }
}

export const getLoginBegin = () => {
    return {
        type: GET_LOGIN_BEGIN
    }
}

export const getLoginFailure = (error) => {
    return {
        type: GET_LOGIN_FAILURE,
        payload: error
    }
}