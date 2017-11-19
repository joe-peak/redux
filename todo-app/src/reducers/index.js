import {combineReducers} from 'redux';
import todo from './todo';
import visibleFilter from './visible-filter';

const reducer = combineReducers({
    todo,
    visibleFilter
});

export default reducer;