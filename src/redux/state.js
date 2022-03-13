const ADD_POST = "ADD_POST";
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";
const SEND_MESSAGE = "SEND_MESSAGE";
const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Hi. how are you?", likesCounts: 15},
                {id: 2, message: "I am fine, thanks.", likesCounts: 32},
                {id: 3, message: "Yo", likesCounts: 5}
            ],
            newPostText: ""
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: "Maks"},
                {id: 2, name: "Vano"},
                {id: 3, name: "Anna"},
                {id: 4, name: "Andrey"},
                {id: 5, name: "Vitalya"}
            ],
            messages: [
                {id: 1, message: "Hi"},
                {id: 2, message: "How are you?"},
                {id: 3, message: "Cool"},
                {id: 4, message: "Yo"}
            ],
            newMessageBody: ""
        }
    },
    _callSubscriber() {
        console.log("State changed");
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
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

    dispatch(action) {
        switch (action.type) {
            case ADD_POST:
                let newPost = {
                    id: 4,
                    message: this._state.profilePage.newPostText,
                    likesCounts: 3
                }
                this._state.profilePage.posts.push(newPost);
                this._state.profilePage.newPostText = "";
                this._callSubscriber(this._state)
                break;

            case UPDATE_NEW_POST_TEXT:
                this._state.profilePage.newPostText = action.newText;
                this._callSubscriber(this._state);
                break;

            case SEND_MESSAGE:
                let body = {
                    id: 5,
                    message: this._state.dialogsPage.newMessageBody
                }
                this._state.dialogsPage.messages.push(body);
                this._state.dialogsPage.newMessageBody = "";
                this._callSubscriber(this._state)
                break;

            case UPDATE_NEW_MESSAGE_BODY:
                this._state.dialogsPage.newMessageBody = action.body;
                this._callSubscriber(this._state);
                break;

        }
    }
}

export const addPostCreator = () => ({type: ADD_POST});
export const updateNewPostTextCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});

export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body});

window.store = store
export default store;