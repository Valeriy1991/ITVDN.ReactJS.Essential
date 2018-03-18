import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import faker from 'faker';

class Chat extends Component {
    render() {
        console.log(this.props)
        const randomUserName = `@${faker.internet.userName().toLocaleLowerCase()}`
        const {addNewUser} = this.props
        return (
            <div>
                <h3>Chat</h3>
                <button onClick={() => addNewUser(randomUserName)}>
                    add new user
                </button>
                <hr />

                {this.props.users.map(u => {
                    return <p key={u}>{u}</p>
                })}
            </div>
        );
    }
}

Chat.propTypes = {

};

const mapStateToProps = (state) => {
    return {
        users: state
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addNewUser: (userName) => {
            dispatch({ type: 'ADD_NEW_USER', payload: userName })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Chat);