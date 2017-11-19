import {createStore} from 'redux';
import reducers from '../reducers';
import {add_todos, toggle_too, complete_todo, set_visibility_filter, VisibilityFilters} from '../actions';
const store = createStore(reducers);
// store.getState();
const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

setTimeout(() => {
    store.dispatch(add_todos('Just test add todos.'));
    store.dispatch(add_todos('Just test reducer.'));
    store.dispatch(add_todos('Just test action.'));
    unsubscribe();
}, 2000);

setTimeout(() => {
    store.dispatch(toggle_too(2));
    store.dispatch(complete_todo(1));
}, 3000);
export default store;