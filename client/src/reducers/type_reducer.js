import { SET_BAKER } from '../actions/types';

export default function typeReducer(state = false, action) {
    switch (action.type) {
        case SET_BAKER:
            return action.payload;
        default:
            return state;
    }
}
