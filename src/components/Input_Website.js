import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { styles } from '../helpers/helpers';

class InputWebsite extends React.Component {
	context = {
		classes: PropTypes.object.isRequired,
		formIsValid: PropTypes.func
	};

	handleChange = (e) => this.props.change(e.target.name, e.target.value);

	render() {
		const { website, error, classes } = this.props;
		return (
			<TextField
				value={website}
				id="website"
				name="website"
				label="Website"
				type="url"
				margin="normal"
				helperText={error.error_website.isError ? error.error_website.text : ''}
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

export default withStyles(styles)(InputWebsite);
