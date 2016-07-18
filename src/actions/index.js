import axios from 'axios';
import { browserHistory } from 'react-router';

const API_URL = 'http://localhost:3090';

export function signinUser(email, password) {
	return function(dispatch) {
		// submit email, pass to server
		axios.post(`${API_URL}/signin`, { email, password })
			.then(response => {
					// if (respose.status === 200)
					//if request is good
					// update state
					// save JWT
					// redirect to route...to
					browserHistory.push('/feature');
			})
			.catch(() => {
				// if request is bad
				// show error
			});
	}
}

