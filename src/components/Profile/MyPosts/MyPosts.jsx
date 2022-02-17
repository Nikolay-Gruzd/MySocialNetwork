import React from 'react';
import classes from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {
    return (
        <div className={classes.posts}>
            My posts
            <div>
                <textarea>New post</textarea>
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