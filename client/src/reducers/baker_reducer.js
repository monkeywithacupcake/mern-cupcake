import {
    AUTH_BAKER,
    UNAUTH_BAKER,
    AUTH_ERROR,
    FETCH_BAKER
} from '../actions/types';

export default function bakerReducer(state = {}, action) {
    switch (action.type) {
        case AUTH_BAKER:
            return { ...state, error: '', authenticated: true};
        case UNAUTH_BAKER:
            return { ...state, authenticated: false };
        case AUTH_ERROR:
            return { ...state, error: action.payload };
        case FETCH_BAKER:
            return { ...state, baker: action.payload };
        default:
            return state;
    }
}
