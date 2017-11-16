import {dispatch} from 'redux';

const TOGGLE_TODO = {
    type: 'TOGGLE_TODO',
    index: 5
};

const SET_VISIBILITY_FILTER = {
  type: 'SET_VISIBILITY_FILTER',
  filter: 'SHOW_COMPLETED'
};

// Action创建函数

const toggle_too = index => {
    return {
        type: 'TOGGLE_TODO',
        index
    };
};

const set_visibility_filter = () => {
    return {
        type: 'SET_VISIBILITY_FILTER',
        filter: 'SHOW_COMPLETED'
    };
};

const toggle = toggle_too(2);
// 发起dispatch
dispatch(toggle);

// OR

const toggleBound = index => {
    dispatch(toggle_too(index));
};

toggleBound();

export default {

};
