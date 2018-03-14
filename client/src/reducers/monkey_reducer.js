import { GET_USER_MONKEYS, ADD_USER_MONKEY } from '../actions/types';

const initialMonkeys = [];

export default function monkeyReducer(state = initialMonkeys, action) {
    switch (action.type) {
        case GET_USER_MONKEYS:
            return { ...state, monkeys: action.payload };
        case ADD_USER_MONKEY:
            return [
                ...state,
                {
                    name: action.name,
                    _id: action._id
                }
            ];
        default:
            return state;
    }
}
