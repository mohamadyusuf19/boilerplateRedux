import {
    LOGIN_CHANGED,
    PASSWORD_CHANGED,
    GET_LOGIN_BEGIN,
    GET_LOGIN_FAILURE,
    LOGIN_SUCCESS
} from '../actions'

const initialState = {
    email: '',
    password: '',
    loading: false,
    data: [],
    error: null    
}

export default authReducer = (state = initialState, action) => {
    console.log(action)
    switch(action.type) {
        case PASSWORD_CHANGED:
            return { ...state, password: action.payload }
        case LOGIN_CHANGED:
            return { ...state, email: action.payload }
        case GET_LOGIN_BEGIN:
            return { ...state, loading: true, email: '', password: '' }
        case LOGIN_SUCCESS:
            return { ...state, data: action.payload, loading: false }
        case GET_LOGIN_FAILURE:
            return { ...state, loading: false, error: action.payload }
        default:
            return state
    }
}