import React, { Component } from 'react';
import PropTypes from 'prop-types';

import faker from 'faker';

class Users extends Component {
    render() {
        const { users } = this.props
        return (
            <div className="users">
                <h3 className="users__title">Online users:</h3>

                <ul>
                    {users.map(u => {
                        return <li key={u}>{u}</li>
                    })}
                </ul>

                <button onClick={this.props.addNewUser}>
                    add new user
				</button>
            </div>
        );
    }
}

Users.propTypes = {

};

export default Users;