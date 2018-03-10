import { GET_USER_CUPCAKES, GET_USER_MONKEYS } from '../actions/types'

const initialUserData = [{cupcakes: [], monkeys: []}]

export default function userGetterReducer(state = initialUserData, action) {
  switch (action.type) {
    case GET_USER_CUPCAKES:
      return {...state, cupcakes: action.payload}
    case GET_USER_MONKEYS:
      return {...state, monkeys: action.payload }
    default:
      return state
  }
}
