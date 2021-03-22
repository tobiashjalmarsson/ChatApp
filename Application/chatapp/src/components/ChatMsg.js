import React from 'react';
import '../styles/main.css';

const ChatMsg = (props) => {
    return (
        <div className="message__container_to_me">
            <p>{props.message}</p>
        </div>
    );
}

export default ChatMsg;