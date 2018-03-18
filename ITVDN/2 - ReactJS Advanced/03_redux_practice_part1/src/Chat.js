import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addNewUser } from './actions';

import Messages from './Messages';
import Users from './Users';

class Chat extends Component {
    render() {
        const { addNewUser, users, messages } = this.props
        return (
            <main className='main-wrapper'>
                <Messages messages={messages} />
                <Users users={users} addNewUser={addNewUser} />
            </main>
        );
    }
}

Chat.propTypes = {

};

const mapStateToProps = (state) => {
    console.log(state)
    return {
        users: state.usersReducer,
        messages: state.messagesReducer
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addNewUser: bindActionCreators(addNewUser, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Chat);