import {combineReducers} from 'redux';
// import actions from '../actions';
import {SET_VISIBILITY_FILTER, ADD_TODO, COMPLETE_TODO } from '../actionType';

const visibilityFilter = (state = 'SHOW_ALL', action) => {
    switch(action.type) {
        case SET_VISIBILITY_FILTER: 
            return action.filter;
        default: 
            return  state;
    }
};

const todos = (state = [], action) => {
    switch(action.type) {
        case ADD_TODO:
            return [...state, {
                text: action.text,
                complate: false
            }];
        case COMPLETE_TODO:
            return  state.map((item, index) => {
                if(index === action.index) {
                    // item.complate = true;
                    return Object.assign({}, item, {complate: true});
                } else {
                    return state;
                }
            });
        default:
            return state;   
    }
};

const reducer = combineReducers({visibilityFilter, todos});
export default reducer;