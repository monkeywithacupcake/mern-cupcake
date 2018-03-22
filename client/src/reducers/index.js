import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
//import  userGetterReducer  from './usergetters';
//import  userSetterReducer  from './usersetters';
import authReducer  from './auth_reducer';
//import monkeyReducer  from './monkey_reducer';
//import cupcakeReducer  from './cupcake_reducer';
import userDataReducer from './userdata_reducer';
import userReducer from './user_reducer'

export default combineReducers({
  form: formReducer,
  auth: authReducer,
  user: userReducer,
  userData: userDataReducer
});

// monkeys: monkeyReducer,
// cupcakes: cupcakeReducer
