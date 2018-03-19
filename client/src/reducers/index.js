import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
//import  userGetterReducer  from './usergetters';
//import  userSetterReducer  from './usersetters';
import authReducer from './auth_reducer';
//import monkeyReducer  from './monkey_reducer';
//import cupcakeReducer  from './cupcake_reducer';
import userDataReducer from './userdata_reducer';
import bakerReducer from './baker_reducer';
import typeReducer from './type_reducer';

export default combineReducers({
    form: formReducer,
    auth: authReducer,
    userData: userDataReducer,
    baker: bakerReducer,
    typeBaker: typeReducer
});

// monkeys: monkeyReducer,
// cupcakes: cupcakeReducer
