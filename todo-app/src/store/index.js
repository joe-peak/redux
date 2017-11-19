import reducer from '../reducers';
import {createStore} from 'redux';
const store = createStore(reducer, {
    todo: [{complete: false, text: 'Just test the init data'}, {complete: false, text: 'Dennis ...'}],
    visibleFilter: 'SHOW_ALL'
});
export default store;