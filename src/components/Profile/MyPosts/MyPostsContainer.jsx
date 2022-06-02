import React from "react";
import {addPost, updateNewPostText} from "../../../redux/reducers/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

// let mapDispatchToProps = (dispatch) => {
//     return {
//         updateNewPostText: (text) => {
//             dispatch(updateNewPostTextCreator(text));
//         },
//         addPost: () => {
//             dispatch(addPostCreator());
//         }
//     }
// }

export default connect(mapStateToProps, {addPost, updateNewPostText}
)(MyPosts);
