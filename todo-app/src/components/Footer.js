import React from 'react';
import PropTypes from 'prop-types';
import {SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE} from '../actionType';

class Footer extends React.Component {
    renderFooter(filter, name) {
        if(this.props.filter === filter) {
           return name;
        }
        return (<a href="javascript: void(0)" onClick={e => {this.props.onClickFilter(filter); e.preventDefault()}}>
                {name}
            </a>);
    }

    render() {
        return (<p>
            Show:
            {' '}
            {
                this.renderFooter(SHOW_ALL, 'All')
            }
            {','}
            {
                this.renderFooter(SHOW_COMPLETED, 'Completed')
            }
            {','}
            {
                this.renderFooter(SHOW_ACTIVE, 'Active')
            }
        </p>)
    };
}

// Footer.propTypes = {
//     onClickFilter: PropTypes.func.isRequired,
//     filter: PropTypes.oneOf([SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE]).isRequired
// };

export default Footer;