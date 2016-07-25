import axios from 'axios';
import { browserHistory } from 'react-router';
import { AUTH_USER, UNAUTH_USER, AUTH_ERROR } from './types';

const API_URL = 'http://localhost:3090';

export function signinUser(email, password) {
	return function(dispatch) {
		// submit email, pass to server
		axios.post(`${API_URL}/signin`, { email, password })
			.then(response => {
					dispatch({ type: AUTH_USER });
					localStorage.setItem('token', response.data.token)
					browserHistory.push('/feature');
			})
			.catch(() => {
				dispatch(authError('Bad login info'));
			});
	}
}

export function signupUser({ email, password }) {
	return function(dispatch) { 
		axios.post(`${API_URL}/signup`, { email, password })
			.then(response => { 
				dispatch({ type: AUTH_USER });
				localStorage.setItem('token', response.data.token);
				browserHistory.push('/feature');
			})
			.catch(response => dispatch(authError('Email in use')));
	}
}

export function authError (error) {
	return {
		type: AUTH_ERROR,
		payload: error
	}
}

export function signoutUser() {
		localStorage.removeItem('token');

	  return { type: UNAUTH_USER } ;
}