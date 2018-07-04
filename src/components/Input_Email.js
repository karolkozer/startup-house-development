import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { styles } from '../helpers/helpers';

class InputEmail extends React.Component {
	context = {
		classes: PropTypes.object.isRequired,
		formIsValid: PropTypes.func
	};

	handleChange = (e) => this.props.change(e.target.name, e.target.value);

	render() {
		const { email, error, classes } = this.props;
		return (
			<TextField
				value={email}
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
		);
	}
}

export default withStyles(styles)(InputEmail);
