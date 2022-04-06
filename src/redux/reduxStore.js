import {combineReducers, createStore} from "redux";
import sidebarReducer from "./reducers/sidebarReducer";
import dialogsReducer from "./reducers/dialogsReducer";
import profileReducer from "./reducers/profileReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer
})

let store = createStore(reducers);

window.store = store;

export default store;