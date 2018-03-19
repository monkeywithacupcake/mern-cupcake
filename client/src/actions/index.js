import axios from 'axios';
import {
    GET_USER_CUPCAKES,
    GET_USER_MONKEYS,
    ADD_USER_CUPCAKE,
    ADD_USER_MONKEY,
    UNAUTH_USER,
    AUTH_USER,
    AUTH_ERROR,
    FETCH_USER,
    UNAUTH_BAKER,
    AUTH_BAKER,
    FETCH_BAKER
} from './types';


const USER_API_URL = '/api/user';

export function signoutUser() {
    localStorage.removeItem('token');
    return {
        type: UNAUTH_USER
    };
}

export function findUser() {
    return function(dispatch) {
        const url = `${USER_API_URL}/finduser`;

        console.log(url);
        const request = axios.get(url, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        });
        request
            .then(response => {
                console.log(
                    'findUser has RESPONSE',
                    response.data.foundUser
                );
                dispatch({
                    type: FETCH_USER,
                    payload: response.data.foundUser
                });
            })
            // If request is bad...
            // -Show an error to the user
            .catch(() => {
                console.log('error');
            });
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
                    type: AUTH_USER,
                    payload: response.data.user
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
    console.log(
        'ACTION CREATOR signupUser running with:',
        email,
        password,
        name
    );

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
                //localStorage.setItem('token', response.data.token);
                console.log(
                    'ACTION CREATOR RESPONSE FROM API: ',
                    response.data
                );
                //-if request is good, we need to update state to indicate user is authenticated
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

export function createMonkey({userid, name}) {
    console.log('ACTION createMonkey has:', userid, name);

    return function(dispatch) {
        const url = `${USER_API_URL}/${userid}/monkey/new`;

        console.log(url);
        const request = axios.post(url, {name}, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        });
        request
            .then(response => {
                console.log(
                    'createMonkey has RESPONSE',
                    response.data.createdMonkey
                );
                // dispatch({
                //     type: ADD_USER_MONKEY,
                //     payload: [response.data.createdMonkey]
                // });
            })
            // If request is bad...
            // -Show an error to the user
            .catch(() => {
                console.log('error');
            });
    };
}

export function fetchUserMonkeys({userid}) {
    console.log('ACTION fetchUserMonkeys has:', userid);
    return function(dispatch) {
        const url = `${USER_API_URL}/${userid}/monkeys`;
        const request = axios.get(url, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        });
        request
            .then(response => {
                console.log(
                    'fetchUserMonkeys has RESPONSE',
                    response.data.monkeys
                );
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

export function createCupcake({userid, monkeyid, color}) {
    console.log('ACTION createCupcake has:', userid, monkeyid, color);
    console.log(monkeyid)
    console.log(color)
    return function(dispatch) {
        const url = `${USER_API_URL}/${userid}/monkey/${monkeyid}/cupcake/new`;

        console.log(url);
        const request = axios.post(url, {color}, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        });
        request
            .then(response => {
                console.log(
                    'createCupcake has RESPONSE',
                    response.data.createdCupcake
                );
                // dispatch({ // should immediately update cupcakes
                //     type: ADD_USER_CUPCAKE,
                //     payload: [response.data.createdCupcake]
                // });
            })
            // If request is bad...
            // -Show an error to the user
            .catch(() => {
                console.log('error');
            });
    };
}

export function fetchUserCupcakes({userid}) {
    return function(dispatch) {
        const url = `${USER_API_URL}/${userid}/cupcakes`;
        const request = axios.get(url, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        });
        request
            .then(response => {
                console.log(
                    'fetchUserCupcakes has RESPONSE',
                    response.data.cupcakes
                );
                // need to mutate cupcakes into a cupcakesById kinda thing?
                dispatch({
                    type: GET_USER_CUPCAKES,
                    payload: response.data.cupcakes
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
    };
}


// baker
const BAKER_API_URL = '/api/baker';


export function signoutBaker() {
    localStorage.removeItem('token');
    return {
        type: UNAUTH_BAKER
    };
}

export function findBaker() {
    return function(dispatch) {
        const url = `${BAKER_API_URL}/findbaker`;

        console.log(url);
        const request = axios.get(url, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        });
        request
            .then(response => {
                console.log(
                    'findBaker has RESPONSE',
                    response.data.foundBaker
                );
                dispatch({
                    type: FETCH_BAKER,
                    payload: response.data.foundBaker
                });
            })
            // If request is bad...
            // -Show an error to the user
            .catch((error) => {
                console.log('error');
                dispatch({
                    type: AUTH_ERROR,
                    payload: error
                });
            });
    };
}


export function signinBaker({ email, password }) {
    console.log('ACTION CREATOR signinBaker running with:', email, password);

    return function(dispatch) {
        // submit email and password to server
        const request = axios.post(`${BAKER_API_URL}/login`, {
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
                    type: AUTH_BAKER,
                    payload: response.data.baker
                });
                console.log(
                    'action creator response has just authenticated the baker!'
                );
            })

            // If request is bad...
            // -Show an error to the user
            .catch((error) => {
                console.log('error');
                dispatch({
                    type: AUTH_ERROR,
                    payload: error
                });
            });
    };
}

export function signupBaker({ email, password, passwordmatch, name, bakery_name }) {
    console.log(
        'ACTION CREATOR signupbaker running with:',
        email,
        password,
        name,
        bakery_name
    );

    return function(dispatch) {
        // submit email and password to server
        const request = axios.post(`${BAKER_API_URL}/signup`, {
            email,
            password,
            name,
            bakery_name
        });
        request
            .then(response => {
                // -Save the JWT token
                //localStorage.setItem('token', response.data.token);
                console.log(
                    'ACTION CREATOR RESPONSE FROM API: ',
                    response.data
                );
                //-if request is good, we need to update state to indicate user is authenticated
                dispatch({
                    type: AUTH_BAKER, payload: response.data.createdBaker
                });
                console.log(
                    'action creator response has just authenticated the baker!'
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
