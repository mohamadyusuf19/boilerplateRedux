export const PASSWORD_CHANGED = 'PASSWORD_CHANGED';
export const LOGIN_CHANGED = 'LOGIN_CHANGED';

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