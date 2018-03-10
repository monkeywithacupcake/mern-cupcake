import axios from 'axios';
import {
    GET_USER_CUPCAKES,
    GET_USER_MONKEYS,
    UNAUTH_USER,
    AUTH_USER,
    AUTH_ERROR,
    FETCH_USER
} from './types';

const USER_API_URL = '/api/user';


export function signoutUser() {
    localStorage.removeItem('token');
    return {
        type: UNAUTH_USER
    };
}


export function signinUser({ email, password }) {
    console.log('ACTION CREATOR signinUser running with:', email, password);

    return function(dispatch) {
        // submit email and password to server
        const request = axios.post(`${USER_API_URL}/login`, {
            email,
            password
        });
        request
            .then(response => {
                // -Save the JWT token
                localStorage.setItem('token', response.data.token);
                console.log(
                    'ACTION CREATOR RESPONSE FROM API: ',
                    response.data
                );
                // -if request is good, we need to update state to indicate user is authenticated
                dispatch({
                    type: AUTH_USER, payload: response.data.user
                });
                console.log(
                    'action creator response has just authenticated the user!'
                );
            })

            // If request is bad...
            // -Show an error to the user
            .catch(() => {
                console.log('error');
                //dispatch(authError('bad login info'))
            });
    };
}

export function signupUser({ email, password, passwordmatch, name }) {
    console.log('ACTION CREATOR signupUser running with:', email, password, name);

    return function(dispatch) {
        // submit email and password to server
        const request = axios.post(`${USER_API_URL}/signup`, {
            email,
            password,
            name
        });
        request
            .then(response => {
                // -Save the JWT token
                localStorage.setItem('token', response.data.token);
                console.log(
                    'ACTION CREATOR RESPONSE FROM API: ',
                    response.data
                );
                // -if request is good, we need to update state to indicate user is authenticated
                dispatch({
                    type: AUTH_USER, payload: response.data.createdUser
                });
                console.log(
                    'action creator response has just authenticated the user!'
                );
            })

            // If request is bad...
            // -Show an error to the user
            .catch(() => {
                console.log('error');
                //dispatch(authError('bad login info'))
            });
    };
}



export function fetchUserMonkeys(userid) {
    return function(dispatch) {
        const url = `${USER_API_URL}/${userid}/monkeys`;
        const request = axios.get(url, {
            headers: { authorization: `Bearer ${localStorage.getItem('token')}` }
        });
        request
            .then(response => {
                console.log("fetchUserMonkeys has RESPONSE", response.data.monkeys)
                dispatch({
                    type: GET_USER_MONKEYS,
                    payload: response.data.monkeys
                });
            })
            // If request is bad...
            // -Show an error to the user
            .catch(() => {
                console.log('error');
            });
    };
}

export function fetchUserCupcakes(userid) {
    return function(dispatch) {
        const url = `${USER_API_URL}/${userid}/cupcakes`;
        const request = axios.get(url, {
            headers: { authorization: `Bearer ${localStorage.getItem('token')}` }
        });
        request
            .then(response => {
                console.log("fetchUserCupcakes has RESPONSE", response.data.cupcakes)
                dispatch({
                    type: GET_USER_CUPCAKES,
                    payload: response.data.events
                });
            })
            // If request is bad...
            // -Show an error to the user
            .catch(() => {
                console.log('error');
            });
    };
}

export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  }
}
