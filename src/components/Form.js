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

	render() {
		const { classes } = this.props;
		return (
			<form className="form">
				<h2 className="heading-second">Sign Up</h2>
				<div className="form__fields">
					<TextField
						autoComplete="disabled"
						id="name"
						name="name"
						label="Name"
						type="text"
						margin="normal"
						required
						fullWidth={true}
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
						required
						fullWidth={true}
						autoComplete="disabled"
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
						id="phone"
						name="phone"
						label="Phone number"
						type="text"
						margin="normal"
						required
						fullWidth={true}
						autoComplete="disabled"
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
						required
						fullWidth={true}
						autoComplete="disabled"
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
				>
					Send
				</Button>
			</form>
		);
	}
}

export default withStyles(styles)(Form);
