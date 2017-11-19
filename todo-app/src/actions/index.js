import {ADD_TODO, Toggle_ToDo, SET_VISIBILITY_FILTER } from '../actionType';

const addTodo = text => ({
    text,
    complete: false,
    type: ADD_TODO
});

const toggleTodo = index => ({
    type: Toggle_ToDo,
    index
});

const setVisibilityFilter = filter => ({
    type: SET_VISIBILITY_FILTER,
    filter
});

export {
    addTodo,
    toggleTodo,
    setVisibilityFilter
};