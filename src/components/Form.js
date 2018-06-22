import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { TextField, Button } from '@material-ui/core';
import { inputLabels, styles } from '../helpers/helpers';

class Form extends React.Component {
	state = {
		name: '',
		email: '',
		password: ''
	};

	render() {
		const { classes } = this.props;
		return (
			<form className="form">
				<h2 className="heading-second">Sign Up</h2>

				<div className="form__content">
					{Object.values(inputLabels).map((label) => (
						<TextField
							autoComplete="disabled"
							key={label.name}
							required
							label={label.name}
							type={label.type}
							margin="normal"
							fullWidth={true}
							InputProps={{
								classes: {
									root: classes.input,
									underline: classes.underline
								}
							}}
							InputLabelProps={{
								className: classes.label
							}}
						/>
					))}
				</div>
				<Button variant="contained" size="large" className={classes.button}>
					Send
				</Button>
			</form>
		);
	}
}

Form.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Form);
