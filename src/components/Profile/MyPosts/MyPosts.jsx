import React from "react";
import classes from "./MyPosts.module.css"
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postsElements = props.posts.map( p => <Post id={p.id} message={p.message} likesCounts={p.likesCounts} /> );

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        alert(text);
    };

    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement} >New post</textarea>
                </div>
                <div>
                    <button onClick={addPost} >Add post</button>
                </div>
            </div>

            { postsElements }

        </div>
    );
};

export default MyPosts;