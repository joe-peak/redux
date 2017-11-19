import React from 'react';
import {SET_VISIBILITY_FILTER, SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE} from '../actionType';

const setVisibilityFilter = (state = SHOW_ALL, action) =>{
    switch(action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter;
        default:
            return state;
    }
};

export default setVisibilityFilter;