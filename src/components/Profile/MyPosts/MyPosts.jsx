import React from 'react';
import classes from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {
    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea>New post</textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>

            <Post message='Hi. how are you?' likesCounts='15'/>
            <Post message='I am fine, thanks.' likesCounts='20'/>

        </div>
    );
};

export default MyPosts;