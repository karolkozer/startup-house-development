const colors = {
	color_blue: '#3b92ff',
	color_white: '#fff'
};

export const inputLabels = {
	name: {
		name: 'Name',
		type: 'text'
	},
	email: {
		name: 'Email',
		type: 'email'
	},
	phone: {
		name: 'Phone number',
		type: 'text'
	},
	password: {
		name: 'Password',
		type: 'password'
	}
};

export const styles = (theme) => ({
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
