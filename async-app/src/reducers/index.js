import {SELECT_SUBREDDIT, INVALIDATE_SUBREDDIT, REQUEST_POSTS, RECEIVE_POSTS} from '../action-type';
import {combineReducers} from 'redux';

const selectedSubreddit = (state = 'reactjs', action) => {
    switch(action.type) {
        case SELECT_SUBREDDIT: 
            return action.reddit;
        default:
            return state;
    }
};

const posts = (state = {
        isFetching: false,
        didInvalidate: false,
        items: []
    }, action) => {
        switch (action.type) {
            case INVALIDATE_SUBREDDIT:
                return Object.assign({}, state, {
                    didInvalidate: true
                });
            case REQUEST_POSTS:
                return Object.assign({}, state, {
                    isFetching: true,
                    didInvalidate: false
                });
            case RECEIVE_POSTS:
                return Object.assign({}, state, {
                    isFetching: false,
                    didInvalidate: false,
                    items: action.posts,
                    lastUpdated: action.receivedAt
                });
            default:
                return state
        }
};

postsBySubreddit = (state = {}, action) => {
    switch (action.type) {
        case INVALIDATE_SUBREDDIT:
        case RECEIVE_POSTS:
        case REQUEST_POSTS:
            return Object.assign({}, state, {
                [action.reddit]: posts(state[action.reddit], action)
            });
        default:
            return state;
    }
};

const rootReducer = combineReducers({
  postsBySubreddit,
  selectedsubreddit
});

export default rootReducer;