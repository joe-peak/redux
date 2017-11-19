import {SELECT_SUBREDDIT, INVALIDATE_SUBREDDIT, REQUEST_POSTS, RECEIVE_POSTS} from '../action-type';

const selectSubreddit = reddit => ({
    type: SELECT_SUBREDDIT,
    reddit
});

const invalidateSubreddit = reddit => ({
    type: INVALIDATE_SUBREDDIT,
    reddit
});

const requestPosts = reddit => ({
    type: REQUEST_POSTS,
    reddit
});

const receive_post = (reddit, json) => ({
    type: RECEIVE_POSTS,
    reddit,
    posts: json.data.chilren.map(child => child.data),
    receivedAt: Date.now()
});

export {
    selectSubreddit,
    invalidateSubreddit,
    requestPosts,
    receive_post
};

