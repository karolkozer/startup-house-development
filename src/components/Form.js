import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { styles } from '../helpers/helpers';

// Import components
import InputName from './Input_Name';
import InputEmail from './Input_Email';
import InputPassword from './Input_Password';
import InputWebsite from './Input_Website';
import ButtonSubmit from './Button_Submit';

class Form extends React.Component {
	context = {
		classes: PropTypes.object.isRequired,
		formIsValid: PropTypes.func
	};

	state = {
		fields: {
			name: '',
			email: '',
			website: '',
			password: ''
		},
		error: {
			error_name: {
				text: 'Name should contains only letters',
				isError: false
			},
			error_email: {
				text: 'Please add valid e-mail adress',
				isError: false
			},
			error_website: {
				text: 'Please add valid link to your projects',
				isError: false
			},
			error_password: {
				text:
					'The password should consist of at least 5 characters and contains small and capital letters, and numbers.',
				isError: false
			}
		}
	};

	handleValidation = (e) => {
		// PreventDefault actions
		e.preventDefault();
		let formIsValid = true;
		// Get the name, email, website,password
		const { name, email, website, password } = { ...this.state.fields };
		const error = { ...this.state.error };
		// Set name Regex
		const nameRegex = /^[a-zA-Z]+$/g;
		// Set email Regex
		const emailRegex = /^[a-zA-Z0-9!#$&_*?-]+(\.[a-zA-Z0-9!#$&_*?-]+)*@[a-zA-Z0-9!#$&_*?-]+(\.[a-zA-Z0-9!#$&_*?-]+)*\.[a-zA-Z]+$/g;
		// Set url Regex
		const urlRegex = /^http(s)?:\/\/.(www)?/g;
		// Set password Regex
		const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{5,}$/g;

		if (!nameRegex.test(name)) {
			// Check if the name does not include any numbers
			formIsValid = false;
			// Change error state
			error.error_name.isError = true;
			this.setState({ error });
		}
		if (!emailRegex.test(email)) {
			// Check the email format
			formIsValid = false;
			// Change error state
			error.error_email.isError = true;
			this.setState({ error });
		}
		if (!urlRegex.test(website)) {
			// Check the url format
			formIsValid = false;
			// Change error state
			error.error_website.isError = true;
			this.setState({ error });
		}
		if (!passwordRegex.test(password)) {
			// Check the password format
			formIsValid = false;
			// Change error state
			error.error_password.isError = true;
			this.setState({ error });
		}
		// If form is valid
		if (formIsValid) {
			// Change the state
			this.props.formIsValid();
			// Reset the from
			e.currentTarget.reset();
		}
	};

	handleChange = (name, value) => {
		// Get state
		const fields = { ...this.state.fields };
		// Update fild
		fields[name] = value.replace(/\s/g, '');
		// // Set new state
		this.setState({ fields });
	};

	render() {
		const { classes } = this.props;
		const error = { ...this.state.error };
		const { name, email, website, password } = { ...this.state.fields };
		return (
			<form className="form" onSubmit={this.handleValidation}>
				<h2 className="heading-second">Sign Up</h2>
				<div className="form__fields">
					<InputName
						value={name}
						error={error}
						classes={classes}
						change={this.handleChange}
					/>
					<InputEmail
						value={email}
						error={error}
						classes={classes}
						change={this.handleChange}
					/>
					<InputWebsite
						value={website}
						error={error}
						classes={classes}
						change={this.handleChange}
					/>
					<InputPassword
						value={password}
						error={error}
						classes={classes}
						change={this.handleChange}
					/>
				</div>
				<ButtonSubmit classes={classes} />
			</form>
		);
	}
}

export default withStyles(styles)(Form);
