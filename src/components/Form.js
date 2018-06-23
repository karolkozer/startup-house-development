import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { styles } from '../helpers/helpers';

class Form extends React.Component {
	context = {
		classes: PropTypes.object.isRequired
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

	handleChange = (e) => {
		// Get state
		const fields = this.state.fields;
		// Update fild
		fields[e.target.name] = e.target.value.trim().replace(/\s/g, '');
		// Set new state
		this.setState({ fields });
	};

	handleValidation = (e) => {
		// PreventDefault actions
		e.preventDefault();
		let formIsValid = true;
		// Get the name, email, website,password
		const { name, email, website, password } = this.state.fields;
		const error = this.state.error;
		// Set name Regex
		const nameRegex = /^[a-zA-Z]+$/g;
		// Set email Regex
		const emailRegex = /^[a-zA-Z0-9!#$&_*?-]+(\.[a-zA-Z0-9!#$&_*?-]+)*@[a-zA-Z0-9!#$&_*?-]+(\.[a-zA-Z0-9!#$&_*?-]+)*\.[a-zA-Z]+$/g;
		// Set url Regex
		const urlRegex = /^http(s)?:\/\/.(www)?/g;
		// Set password Regex
		const passwordRegex = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/g;

		if (!nameRegex.test(name) && name.length !== 0) {
			// Check if the name does not include any numbers
			formIsValid = !formIsValid;
			// Change error state
			error.error_name.isError = true;
			this.setState({ error });
		} else if (!emailRegex.test(email) && email.length !== 0) {
			// Check the email format
			formIsValid = !formIsValid;
			// Change error state
			error.error_email.isError = true;
			this.setState({ error });
		} else if (!urlRegex.test(website) && website.length !== 0) {
			// Check the url format
			formIsValid = !formIsValid;
			// Change error state
			error.error_website.isError = true;
			this.setState({ error });
		} else if (password.length < 5) {
			// Check the password length
			formIsValid = !formIsValid;
			// Change error state
			error.error_password.isError = true;
			this.setState({ error });
		} else if (!passwordRegex.test(password)) {
			// Check the password format
			formIsValid = !formIsValid;
			// Change error state
			error.error_password.isError = true;
			this.setState({ error });
		}

		if (formIsValid) {
			e.currentTarget.reset();
		}
	};

	render() {
		const { classes } = this.props;
		const error = this.state.error;
		return (
			<form className="form" onSubmit={this.handleValidation}>
				<h2 className="heading-second">Sign Up</h2>
				<div className="form__fields">
					<TextField
						autoComplete="off"
						id="name"
						name="name"
						label="Name"
						type="text"
						margin="normal"
						helperText={error.error_name.isError ? error.error_name.text : ''}
						required
						fullWidth={true}
						onChange={this.handleChange}
						InputProps={{
							classes: {
								underline: classes.underline
							}
						}}
						InputLabelProps={{
							className: classes.label
						}}
					/>
					<TextField
						id="email"
						name="email"
						label="Email"
						type="email"
						margin="normal"
						helperText={error.error_email.isError ? error.error_email.text : ''}
						required
						fullWidth={true}
						onChange={this.handleChange}
						autoComplete="off"
						InputProps={{
							classes: {
								underline: classes.underline
							}
						}}
						InputLabelProps={{
							className: classes.label
						}}
					/>
					<TextField
						id="website"
						name="website"
						label="Website"
						type="url"
						margin="normal"
						helperText={
							error.error_website.isError ? error.error_website.text : ''
						}
						required
						fullWidth={true}
						onChange={this.handleChange}
						autoComplete="off"
						InputProps={{
							classes: {
								underline: classes.underline
							}
						}}
						InputLabelProps={{
							className: classes.label
						}}
					/>
					<TextField
						id="password"
						name="password"
						label="Password"
						type="password"
						margin="normal"
						helperText={
							error.error_password.isError ? error.error_password.text : ''
						}
						required
						fullWidth={true}
						onChange={this.handleChange}
						autoComplete="off"
						InputProps={{
							classes: {
								underline: classes.underline
							}
						}}
						InputLabelProps={{
							className: classes.label
						}}
					/>
				</div>
				<Button
					variant="contained"
					size="large"
					color="primary"
					className={classes.button}
					type="submit"
				>
					Send
				</Button>
			</form>
		);
	}
}

export default withStyles(styles)(Form);
