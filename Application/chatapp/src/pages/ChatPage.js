import React from 'react';
import { connect } from 'react-redux';
import { addMsg } from '../redux/store';

const ChatPage = (props) => {
    return (
        <div>
            <h1>ChatPage</h1>
            {props.messages.map((message) => {
                return <p>{message}</p>
            })}
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
const mapDispatchToProps = (dispatch) => {
    return {
        addMsg: () => dispatch(addMsg())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ChatPage);