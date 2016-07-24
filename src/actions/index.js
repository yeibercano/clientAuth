import axios from 'axios';
import { browserHistory } from 'react-router';
import { AUTH_USER, UNAUTH_USER, AUTH_ERROR } from './types';

const API_URL = 'http://localhost:3090';

export function signinUser(email, password) {
	return function(dispatch) {
		// submit email, pass to server
		axios.post(`${API_URL}/signin`, { email, password })
			.then(response => {
					// if (respose.status === 200)
					//if request is good
					// update state
					dispatch({ type: AUTH_USER });
					// save JWT
					localStorage.setItem('token', response.data.token)
					// redirect to route...to
					browserHistory.push('/feature');
			})
			.catch(() => {
				// if request is bad
				// show error
				dispatch(authError('Bad login info'));
			});
	}
}

export function authError (error) {
	return {
		type: AUTH_ERROR,
		payload: error
	}
}
