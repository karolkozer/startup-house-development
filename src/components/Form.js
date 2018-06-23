import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import blue from '@material-ui/core/colors/blue';

const styles = (theme) => ({
	button: {
		margin: theme.spacing.unit,
		backgroundColor: blue[700],
		'&:hover': {
			backgroundColor: blue[800]
		},
		width: 160,
		borderRadius: 90,
		fontWeight: 400,
		letterSpacing: 1
	},
	textfield: {
		color: blue[700],
		borderColor: blue[700]
	}
});

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
						id="name"
						name="name"
						label="Name"
						type="text"
						margin="normal"
						required
						fullWidth={true}
					/>
					<TextField
						id="email"
						name="email"
						label="Email"
						type="email"
						margin="normal"
						required
						fullWidth={true}
					/>
					<TextField
						id="phone"
						name="phone"
						label="Phone number"
						type="text"
						margin="normal"
						required
						fullWidth={true}
					/>
					<TextField
						id="password"
						name="password"
						label="Password"
						type="password"
						margin="normal"
						required
						fullWidth={true}
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
