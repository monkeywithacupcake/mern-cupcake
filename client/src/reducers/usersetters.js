import { ADD_USER_MONKEY, ADD_USER_CUPCAKE } from '../actions/types'

const initialUserData = [{cupcakes: [], monkeys: []}]

export default function userSetterReducer(state = initialUserData, action) {
  switch (action.type) {
    case ADD_USER_CUPCAKE:
      return {...state, cupcakes: action.payload}
    case ADD_USER_MONKEY:
      return {...state, monkeys: action.payload }
    default:
      return state
  }
}

// REALLY NOT SURE WE NEED THESE
