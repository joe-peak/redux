import {combineReducers} from 'redux';
import todos from './todos';
import visibilityFilter from './visibility-filter';
import { ADD_TODO, COMPLETE_TODO, Toggle_ToDo, SET_VISIBILITY_FILTER} from '../actionType';

const initState = {
    filter: 'SHOW_ALL',
    todos: []
};

// 拆分reducer
// 最基础的reduce合成
const todoApp = (state = initState, action) => {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return Object.assign({}, state, {
                filter: visibilityFilter(state.filter, action)
            });   
        case ADD_TODO:
        case COMPLETE_TODO:
        case Toggle_ToDo:
            return {...state, ...{todos: todos(state.todos, action)}};   
    }
}

const toDoApp = (state = {}, action) => {
    return {
        visibilityFilter: visibilityFilter(state.filter, action),
        todos: todos(state.todos, action)
    };
};

// 通过combineReducers()工具来合成reducer,与以上的合成方法完全等价
const reducer = combineReducers({visibilityFilter, todos});
export default reducer;