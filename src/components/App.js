import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

// Import components
import Form from './Form';

export default class App extends React.Component {
	render() {
		return (
			<MuiThemeProvider>
				<div className="container">
					<main className="main">
						<Form />
					</main>
				</div>
			</MuiThemeProvider>
		);
	}
}
