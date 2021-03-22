import React from 'react';
import { connect } from 'react-redux';
import { addMsg } from '../redux/store';

const ChatPage = (props) => {
    const handleSubmit = (e) => {
        const msg = e.target.elements.msg_box.value;
        e.preventDefault();
        console.log(msg);
        props.dispatch(addMsg(msg));
    }
    return (
        <div>
            <h1>ChatPage</h1>
            {props.messages.map((message) => {
                return <p>{message}</p>
            })}
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="message" name="msg_box"></input>
                <button>Send</button>
            </form>
        </div>
    );
}

// Map the redux state to the props of the component
const mapStateToProps = (state) => {
    return {
        messages: state.messages
    }
}

// Map our dispatch to the props of the component

export default connect(mapStateToProps)(ChatPage);