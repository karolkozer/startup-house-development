import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { styles } from '../helpers/helpers';

class InputPassword extends React.Component {
	context = {
		classes: PropTypes.object.isRequired,
		formIsValid: PropTypes.func
	};

	handleChange = (e) => this.props.change(e.target.name, e.target.value);

	render() {
		const { password, error, classes } = this.props;
		return (
			<TextField
				value={password}
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
		);
	}
}

export default withStyles(styles)(InputPassword);
