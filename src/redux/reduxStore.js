import {combineReducers, createStore} from "redux";
import sidebarReducer from "./reducers/sidebarReducer";
import dialogsReducer from "./reducers/dialogsReducer";
import profileReducer from "./reducers/profileReducer";
import usersReducer from "./reducers/usersReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    sidebar: sidebarReducer,
})

let store = createStore(reducers);

window.store = store;

export default store;