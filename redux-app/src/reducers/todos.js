import { ADD_TODO, COMPLETE_TODO, Toggle_ToDo } from '../actionType';
const todos = (state = [], action) => {
    switch(action.type) {
        case ADD_TODO:
            return [...state, {
                text: action.text,
                complete: false
            }];
        case COMPLETE_TODO:
            return  state.map((item, index) => {
                if (index === action.index) {
                    // 为了保持reducer的纯洁性，不能直接修改state
                    // item.complete = true;
                    return Object.assign({}, item, {complete: true});
                } else {
                    return item;
                }
            });
        case Toggle_ToDo:
            return state.map((item, index) => {
                if (index === action.index) {
                    return {...item, ...{complete: !item.complete}};
                }
                return item;
            });  
        default:
            return state;   
    }
};

export default todos;