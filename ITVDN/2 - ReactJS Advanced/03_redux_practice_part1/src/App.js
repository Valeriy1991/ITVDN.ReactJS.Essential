import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';

import {createStore} from 'redux';

import Chat from './Chat';

// --------------------------------------
const usersState = [
    '@john_123',
    '@alex_1989',
    '@chris'
]
const reducer = (state = usersState, action) => {
    if(action.type === 'ADD_NEW_USER') {
        const userName = action.payload
        return state.concat(userName)
    }
    return state
}
const store = createStore(reducer)
window.store = store
// --------------------------------------

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div>
                    <Chat/>
                </div>
            </Provider>
        );
    }
}

App.propTypes = {

};

export default App;