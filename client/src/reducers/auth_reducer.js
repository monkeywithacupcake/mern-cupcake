import {
    AUTH_USER,
    UNAUTH_USER,
    AUTH_ERROR
} from '../actions/types';

export default function authReducer(state = {}, action) {
    switch (action.type) {
        case AUTH_USER:
            return { ...state, error: '', authenticated: true};
        case UNAUTH_USER:
            return { ...state, authenticated: false };
        case AUTH_ERROR:
            return { ...state, error: action.payload };
        default:
            return state;
    }
}

// Taking user out of is auth payload. Was like:

// export default function authReducer(state = {}, action) {
//     switch (action.type) {
//         case AUTH_USER:
//             return { ...state, error: '', authenticated: true};
//         case UNAUTH_USER:
//             return { ...state, authenticated: false };
//         case AUTH_ERROR:
//             return { ...state, error: action.payload };
//         case FETCH_USER:
//             return {
//                 ...state,
//                 user: action.payload
//             };
//         default:
//             return state;
//     }
// }
