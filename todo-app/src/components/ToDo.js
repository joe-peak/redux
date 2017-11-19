import React from 'react';
import PropTypes from 'prop-types';

class ToDo extends React.Component {
    render() {
        return (
            <li onClick={this.props.onClick} style={{textDecoration: this.props.complete ? 'line-through' : 'none', cursor: this.props.complete ? 'default' : 'pointer'}}>
                {this.props.text}
            </li>
        );
    }
}

ToDo.propTypes = {
    text: PropTypes.string.isRequired,
    complete: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired
};

export default ToDo;