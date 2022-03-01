import React from 'react';
import classes from "./Post.module.css";

const Post = (props) => {
    return (
        <div>
            <div className={classes.post}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO16OPSvK5qiq3mwDQP7jT83RX5gttdjwfJg&usqp=CAU"
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