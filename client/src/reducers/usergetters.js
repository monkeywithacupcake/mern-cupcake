import { GET_USER_CUPCAKES, GET_USER_MONKEYS } from '../actions/types';

const initialUserData = [
    {
        cupcakes: [{ color: '', monkeyid: '', monkeyname: '', status: '', _id: '' }],
        monkeys: [{ name: '', user: '', _id: '' }]
    }
];

export default function userGetterReducer(state = initialUserData, action) {
    switch (action.type) {
        case GET_USER_CUPCAKES:
            return { ...state, cupcakes: action.payload };
        case GET_USER_MONKEYS:
            return { ...state, monkeys: action.payload };
        default:
            return state;
    }
}

// not sure about how constructing the cupcake data here because it does not match the cupcake schema!
