import React from 'react';
import Icon from '@material-ui/core/Icon';

const Message = () => (
	<div className="message">
		<Icon style={{ fontSize: 80 }}>done</Icon>
		<p className="message__description">Successfully completed!</p>
	</div>
);

export default Message;
