import React from 'react';
// Import components
import InputName from './Input_Name';
import InputEmail from './Input_Email';
import InputPassword from './Input_Password';
import InputWebsite from './Input_Website';

const FormInputs = ({ fields, error, classes, change }) => {
	const { name, email, website, password } = fields;
	return (
		<React.Fragment>
			<InputName value={name} error={error} classes={classes} change={change} />
			<InputEmail
				value={email}
				error={error}
				classes={classes}
				change={change}
			/>
			<InputWebsite
				value={website}
				error={error}
				classes={classes}
				change={change}
			/>
			<InputPassword
				value={password}
				error={error}
				classes={classes}
				change={change}
			/>
		</React.Fragment>
	);
};

export default FormInputs;
