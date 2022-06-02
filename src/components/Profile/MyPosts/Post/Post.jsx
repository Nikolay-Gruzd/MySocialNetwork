import React from 'react';
import userPhoto from "../../../../Images/userPhoto.png";
import classes from "./Post.module.css";

const Post = (props) => {
    return (
        <div>
            <div className={classes.post}>
                <img src={userPhoto}
                     alt="avatar"
                />
                {props.message}
                    <div>
                        <span>likes: {props.likesCounts}</span>
                    </div>
            </div>
        </div>
    );
};

export default Post;