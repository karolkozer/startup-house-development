import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { styles } from '../helpers/helpers';

class InputName extends React.Component {
	context = {
		classes: PropTypes.object.isRequired,
		formIsValid: PropTypes.func
	};

	handleChange = (e) => this.props.change(e.target.name, e.target.value);

	render() {
		const { name, error, classes } = this.props;
		return (
			<TextField
				value={name}
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
		);
	}
}

export default withStyles(styles)(InputName);
