import React from "react";
import classes from "./MyPosts.module.css"
import Post from "./Post/Post";
const MyPosts = (props) => {

    let postsElements = props.posts.map( p => <Post id={p.id} message={p.message} likesCounts={p.likesCounts} /> );
    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}
                              placeholder="Enter text your post"
                              onChange={onPostChange}
                              value={props.newPostText}
                    />
                </div>
                <div>
                    <button onClick={onAddPost} >Add post</button>
                </div>
            </div>

            { postsElements }

        </div>
    );
};

export default MyPosts;