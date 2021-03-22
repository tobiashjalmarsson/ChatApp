import {createStore} from 'redux';

// ActionTypes
const ADD_MSG = "ADD_MSG";

// Actions

const addMsg = (msg) => ({
    type: ADD_MSG,
    payload: {
        message: msg
    }
})
// Reducers
const defaultMessagesState = {
    messages: ["hi", "there"]
}
const messagesReducer = (state = defaultMessagesState, action) => {
    switch (action.type) {
        case ADD_MSG:
            return {
                messages: [...state.messages, action.payload.message]
            }
        default:
            return state;
    }
}
// Store
const store = createStore(
    messagesReducer, 
    defaultMessagesState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
export default store;