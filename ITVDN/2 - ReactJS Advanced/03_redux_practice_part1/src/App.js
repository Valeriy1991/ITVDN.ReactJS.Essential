import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';

import {createStore} from 'redux';

import Chat from './Chat';
import reducer from './reducer';

// --------------------------------------
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