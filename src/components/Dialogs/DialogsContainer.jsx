import React from "react";
import {sendMessage, updateNewMessageBody} from "../../redux/reducers/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

export default connect(mapStateToProps,
    {sendMessage, updateNewMessageBody}
    )(Dialogs);