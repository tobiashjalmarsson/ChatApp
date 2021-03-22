import React from 'react';
import { connect } from 'react-redux';
import { addMsg } from '../redux/store';
import ChatMsg from '../components/ChatMsg';
import '../styles/main.css';

const ChatPage = (props) => {
    const handleSubmit = (e) => {
        // Input value from the inputfield
        const msg = e.target.elements.msg_box.value;
        // Prevent the page from updating
        e.preventDefault();
        // Add the new msg to the store
        props.dispatch(addMsg(msg));
    }
    return (
        <div className="chat__container">
            <h1>ChatPage</h1>
            {props.messages.map((message) => {
                return <ChatMsg message={message} />
            })}
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="message" name="msg_box"></input>
                <button>Send</button>
            </form>
        </div>
    );
}

// Map the redux state to the props of the component
// now the messages can be accessed with props.messages
const mapStateToProps = (state) => {
    return {
        messages: state.messages
    }
}

// Map our dispatch to the props of the component
export default connect(mapStateToProps)(ChatPage);