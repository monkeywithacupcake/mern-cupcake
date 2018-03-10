import {
    AUTH_USER,
    UNAUTH_USER,
    AUTH_ERROR,
    FETCH_USER
} from '../actions/types';

export default function authReducer(state = {}, action) {
    switch (action.type) {
        case AUTH_USER:
            return { ...state, error: '', authenticated: true, user: action.payload };
        case UNAUTH_USER:
            return { ...state, authenticated: false };
        case AUTH_ERROR:
            return { ...state, error: action.payload };
        case FETCH_USER:
            return {
                ...state,
                user: action.payload
            };
        default:
            return state;
    }
}
