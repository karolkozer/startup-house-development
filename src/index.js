import React from 'react';
import ReactDOM from 'react-dom';

// Import css
import './css/main.css';

// Import component
import App from './components/App';

const Root = () => <App />;

ReactDOM.render(<Root />, document.getElementById('root'));
