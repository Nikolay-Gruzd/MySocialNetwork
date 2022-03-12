const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let store ={
    _state : {
        profilePage:{
            posts : [
                {id: 1, message: "Hi. how are you?", likesCounts: 15},
                {id: 2, message: "I am fine, thanks.", likesCounts: 32},
                {id: 3, message: "Yo", likesCounts: 5}
            ],
            newPostText: "123"
        },
        dialogsPage:{
            dialogs : [
                {id: 1, name: "Maks"},
                {id: 2, name: "Vano"},
                {id: 3, name: "Anna"},
                {id: 4, name: "Andrey"},
                {id: 5, name: "Vitalya"}
            ],
            messages :[
                {id: 1, message: "Hi"},
                {id: 2, message: "How are you?"},
                {id: 3, message: "Cool"},
                {id: 3, message: "Yo"}
            ]
        }
    },
    _callSubscriber(){
        console.log("State changed");
    },

    getState(){
        return this._state
    },
    subscribe(observer){
        this._callSubscriber = observer;
    },

    // _addPost(postMessage){
    //     let newPost = {
    //         id: 4,
    //         message: postMessage,
    //         likesCounts: 3
    //     }
    //     this._state.profilePage.posts.push(newPost);
    //     this._state.profilePage.newPostText = "";
    //     this._callSubscriber(this._state)
    // },
    // _updateNewPostText(newText){
    //     this._state.profilePage.newPostText = newText;
    //     this._callSubscriber(this._state);
    // },

    dispatch(action){
        if (action.type === ADD_POST) {
            let newPost = {
                id: 4,
                message: this._state.profilePage.newPostText,
                likesCounts: 3
            }
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = "";
            this._callSubscriber(this._state)
        }
        else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
    }
}

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});

window.store = store
export default store;