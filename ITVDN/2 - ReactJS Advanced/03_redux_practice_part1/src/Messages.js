import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Messages extends Component {
    render() {
        return (
            <div>
                {this.props.messages.map(m => {
                    const dateTime = new Date(m.datetime)
                    return (
                        <div key={m.datetime}>
                            <p>
                                <span>[{dateTime.toLocaleString()}]</span>
                                <span>{m.author}:</span>
                                <span>{m.text}</span>
                            </p>
                        </div>
                    )
                })}
            </div>
        );
    }
}

Messages.propTypes = {

};

export default Messages;