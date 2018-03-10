import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import  userGetterReducer  from './usergetters';
import authReducer  from './auth_reducer';

export default combineReducers({
  form: formReducer,
  auth: authReducer,
  userdata: userGetterReducer
});
