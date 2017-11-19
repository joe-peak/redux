import {ADD_TODO, Toggle_ToDo } from '../actionType';

const todo = (state = [], action) => {
    switch(action.type) {
        case ADD_TODO:
            return [...state, {
                text: action.text,
                complete: action.complete,
            }];

        case Toggle_ToDo:
            return state.map((todo, index) => {
                if(index == action.index) {
                    return {...todo,complete: !todo.complete};
                } else {
                    return todo;
                }
            });
        default:
            return state;
    }
};

export default todo;