import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { TextField, Button } from '@material-ui/core';
import { inputLabels, colors } from '../helpers/helpers';

const styles = (theme) => ({
	label: {
		fontSize: 18,
		color: colors.color_blue
	},
	input: {
		fontSize: 16
	},
	underline: {
		'&:after': {
			borderBottomColor: colors.color_blue
		}
	},
	button: {
		fontSize: 14,
		fontWeight: 400,
		backgroundColor: colors.color_blue,
		borderRadius: 20,
		padding: '1rem 5rem',
		color: colors.color_white,
		'&:hover': {
			color: colors.color_blue,
			backgroundColor: colors.color_white
		}
	}
});

const labels = {
	name: 'Name',
	email: 'Email',
	phone: 'Phone number (+48 or 001)',
	password: 'Password'
};

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
