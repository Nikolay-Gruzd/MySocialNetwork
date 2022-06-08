import React from "react";
import classes from "./MyPosts.module.css"
import Post from "./Post/Post";
import AddPostForm from "./AddPostForm/AddPostForm";

const MyPosts = (props) => {

    let postsElements = props.posts.map( p => <Post key={p.id} id={p.id} message={p.message} likesCounts={p.likesCounts} /> );

    let addNewPost = (values) => {
        console.log(values.newPostText)
        props.addPost(values.newPostText)
    };

    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <AddPostForm addNewPost={addNewPost}/>
            { postsElements }
        </div>
    );
};

export default MyPosts;