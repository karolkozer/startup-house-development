import React from 'react';

// Import components
import Form from './Form';
import Message from './Message';

export default class App extends React.Component {
	state = {
		isFormValid: false
	};

	changeFormValidation = () =>
		this.setState({ isFormValid: !this.state.isFormValid });

	render() {
		return (
			<div className="container">
				<main className="main">
					{this.state.isFormValid ? (
						<Message />
					) : (
						<Form formIsValid={this.changeFormValidation} />
					)}
				</main>
			</div>
		);
	}
}
