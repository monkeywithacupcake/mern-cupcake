import {
    GET_USER_MONKEYS,
    ADD_USER_MONKEY,
    GET_USER_CUPCAKES,
    ADD_USER_CUPCAKE
} from '../actions/types';

const initialUserData = [
    {
        cupcakes: [{ color: '', monkey: '', status: '', _id: '' }],
        monkeys: [{ name: '', _id: '' }]
    }
];

export default function userDataReducer(state = initialUserData, action) {
    switch (action.type) {
        case GET_USER_CUPCAKES:
            return { ...state, cupcakes: action.payload };
        case GET_USER_MONKEYS:
            return { ...state, monkeys: action.payload };

        default:
            return state;
    }
}
// export default function monkeyReducer(state = initialMonkeys, action) {
//     switch (action.type) {
//         case GET_USER_MONKEYS:
//             return { ...state, monkeys: action.payload };
//         case ADD_USER_MONKEY:
//             return [
//                 ...state,
//                 ...{
//                     name: action.name,
//                     _id: action._id
//                 }
//             ];
//         default:
//             return state;
//     }
// }
// export default function cupcakeReducer(state = initialCupcakes, action) {
//     switch (action.type) {
//         case GET_USER_CUPCAKES:
//             return { ...state, ...action.payload };
//         case ADD_USER_CUPCAKE:
//             return [
//                 ...state,
//                 {
//                     monkey: action.monkey,
//                     color: action.color,
//                     status: action.status,
//                     _id: action._id
//                 }
//             ];
//         default:
//             return state;
//     }
// }
