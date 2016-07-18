import React, { Component } from 'react';
import { reduxForm } from 'redux-form';

class Signin extends Component {
	render() {
		return (
			<form>
				<fieldset className="form-group">
					<label htmlFor="">Email</label>
					<input type="text" className="form-control"/>
				</fieldset>
				<fieldset className="form-group">
					<label htmlFor="">Password</label>
					<input type="text" className="form-control"/>
				</fieldset>
				<button action='submit' className="btn btn-primary">Sign in</button>
			</form>
		);
	}
}

export default reduxForm({ 
	form:'signin',
	fields: ['email', 'password']
})(Signin);