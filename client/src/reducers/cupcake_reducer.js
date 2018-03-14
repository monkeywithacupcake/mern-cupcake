import { GET_USER_CUPCAKES, ADD_USER_CUPCAKE } from '../actions/types';

const initialCupcakes = [];

export default function cupcakeReducer(state = initialCupcakes, action) {
    switch (action.type) {
        case GET_USER_CUPCAKES:
            return { ...state, ...action.payload };
        case ADD_USER_CUPCAKE:
            return [
                ...state,
                {
                    monkey: action.monkey,
                    color: action.color,
                    status: action.status,
                    _id: action._id
                }
            ];
        default:
            return state;
    }
}
