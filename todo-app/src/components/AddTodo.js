import React from 'react';
import PropTypes from 'prop-types';
class AddTodo extends React.Component {
    handelClick = () => {
        // const node = this.input;
        const node = this.refs.input;
        const text = node.value.trim();
        this.props.clickAdd(text);
        node.value = '';
    }
    render() {
        return (
            <div>
                <input ref='input' type="text"/>
                {/*<input ref={input => this.input = input}  type="text"/>*/}
                <button onClick={this.handelClick}>Add</button>
            </div>
        );
    }
}

// 属性检测
// AddTodo.propTypes  = {
//     clickAdd: PropTypes.func.isRequired
// };

export default AddTodo;