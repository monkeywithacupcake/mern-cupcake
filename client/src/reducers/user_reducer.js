import {
    FETCH_USER
} from '../actions/types';

export default function authReducer(state = {}, action) {
    switch (action.type) {
        case FETCH_USER:
            return {
                ...state,
                user: action.payload
            };
        default:
            return state;
    }
}
