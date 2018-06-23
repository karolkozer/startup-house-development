import blue from '@material-ui/core/colors/blue';

export const styles = (theme) => ({
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
