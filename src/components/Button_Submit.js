import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { styles } from '../helpers/helpers';

class ButtonSubmit extends React.Component {
	context = {
		classes: PropTypes.object.isRequired,
		formIsValid: PropTypes.func
	};

	render() {
		const { classes } = this.props;
		return (
			<Button
				variant="contained"
				size="large"
				color="primary"
				className={classes.button}
				type="submit"
			>
				Send
			</Button>
		);
	}
}

export default withStyles(styles)(ButtonSubmit);
