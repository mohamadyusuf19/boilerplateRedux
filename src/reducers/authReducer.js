import {
    LOGIN_CHANGED,
    PASSWORD_CHANGED
} from '../actions'

const initialState = {
    login: '',
    password: ''    
}

export default authReducer = (state = initialState, action) => {
    console.log(action)
    switch(action.type) {
        case PASSWORD_CHANGED:
            return { ...state, password: action.payload }
        case LOGIN_CHANGED:
            return { ...state, login: action.payload }
        default:
            return state
    }
}