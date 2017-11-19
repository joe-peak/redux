import React from 'react';
import PropTypes from 'prop-types';
import ToDo from './ToDo';

class ToDoList extends React.Component {
    render() {
        return (<ul>
            {
                this.props.todolist.map((todo, index) => {
                    return  <ToDo key = {index} {...todo} onClick = {() => {this.props.onTodoClick(index)}}/>
                })
            }
        </ul>);
    }
}

ToDoList.propTypes = {
    onTodoClick: PropTypes.func.isRequired,
    todolist: PropTypes.arrayOf(PropTypes.shape({
        complete: PropTypes.bool.isRequired,
        text: PropTypes.string.isRequired
    }).isRequired).isRequired
};

export default ToDoList;