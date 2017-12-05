import React from 'react';
import PropTypes from 'prop-types';
class Executioner extends React.Component {
    // static propTypes = {
    //     children: PropTypes.func.isRequired
    // }
    render () {
        return (
                <div>{React.Children.only(this.props.children)}</div>
            );
    }
}

export default Executioner;