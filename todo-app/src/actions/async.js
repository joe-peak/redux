import {INVALIDATE_SUBREDDIT, SELECT_SUBREDDIT, REQUEST_POSTS, RECEIVE_POSTS } from '../actionType';

const selectSubreddit = subreddit => ({
    type: SELECT_SUBREDDIT,
    subreddit
});

const invalidatesubreddit = subreddit=> ({
    type: INVALIDATE_SUBREDDIT,
    subreddit
});

const requestPosts = subreddit=> ({
    type: REQUEST_POSTS,
    subreddit
});

const receivetPosts = (subreddit, res)=> {
    return {
        subreddit,
        type: RECEIVE_POSTS,
        posts: res.data.children.map( child => child.data),
        receivedAt: new Date()
    };
};

export {
    selectSubreddit,
    invalidatesubreddit,
    requestPosts,
    receivetPosts
};
