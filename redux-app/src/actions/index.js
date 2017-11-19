import {dispatch} from 'redux';
import { ADD_TODO, COMPLETE_TODO, Toggle_ToDo } from '../actionType';

const SET_VISIBILITY_FILTER = {
  type: 'SET_VISIBILITY_FILTER',
  filter: 'SHOW_COMPLETED'
};

// const ADD_TODO = {
//     text: 'Just test add todos',
//     complete: false
// };

// Action创建函数

const toggle_too = index => {
    return {
        type: Toggle_ToDo,
        index
    };
};

const complete_todo = index => {
    return {
        type: COMPLETE_TODO,
        index
    }
}

const set_visibility_filter = () => {
    return {
        type: 'SET_VISIBILITY_FILTER',
        filter: 'SHOW_COMPLETED'
    };
};

const add_todos = text => {
    return {
        text,
        complete: false,
        type: ADD_TODO
    }
};

const VisibilityFilters = {
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_UNCOMPLETED: 'SHOW_UNCOMPLETED',
    SHOW_ALL: 'SHOW_ALL'
};

const toggle = toggle_too(2);
// 发起dispatch
// dispatch(toggle);

// OR

// const toggleBound = index => {
//     dispatch(toggle_too(index));
// };

// toggleBound();

export  {
    add_todos,
    toggle_too,
    complete_todo,
    set_visibility_filter,
    VisibilityFilters
};
