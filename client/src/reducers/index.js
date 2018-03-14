import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
//import  userGetterReducer  from './usergetters';
//import  userSetterReducer  from './usersetters';
import authReducer  from './auth_reducer';
import monkeyReducer  from './monkey_reducer';
import cupcakeReducer  from './cupcake_reducer';

export default combineReducers({
  form: formReducer,
  auth: authReducer,
  monkeys: monkeyReducer,
  cupcakes: cupcakeReducer
});
