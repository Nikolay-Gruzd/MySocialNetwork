// import profileReducer from "./reducers/profile-reducer";
// import dialogsReducer from "./reducers/dialogs-reducer";
// import sidebarReducer from "./reducers/sidebar-reducer";
//
// let store = {
//     _state: {
//         profilePage: {
//             posts: [
//                 {id: 1, message: "Hi. how are you?", likesCounts: 15},
//                 {id: 2, message: "I am fine, thanks.", likesCounts: 32},
//                 {id: 3, message: "Yo", likesCounts: 5}
//             ],
//             newPostText: ""
//         },
//         dialogsPage: {
//             dialogs: [
//                 {id: 1, name: "Maks"},
//                 {id: 2, name: "Vano"},
//                 {id: 3, name: "Anna"},
//                 {id: 4, name: "Andrey"},
//                 {id: 5, name: "Vitalya"}
//             ],
//             messages: [
//                 {id: 1, message: "Hi"},
//                 {id: 2, message: "How are you?"},
//                 {id: 3, message: "Cool"},
//                 {id: 4, message: "Yo"}
//             ],
//             newMessageBody: ""
//         },
//         sidebar: {}
//     },
//
//     _callSubscriber() {
//         console.log("State changed");
//     },
//
//     getState() {
//         return this._state
//     },
//
//     subscribe(observer) {
//         this._callSubscriber = observer;
//     },
//
//     dispatch(action) {
//         this._state.profilePage = profileReducer(this._state.profilePage, action);
//         this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
//         this._state.sidebar = sidebarReducer(this._state.sidebar, action);
//
//         this._callSubscriber(this._state);
//     }
// }
//
// window.store = store
// export default store;