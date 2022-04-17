import React from "react";
import {sendMessage, updateNewMessageBody} from "../../redux/reducers/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

// let mapDispatchToProps = (dispatch) => {
//     return {
//         updateNewMessageBody: (body) => {
//             dispatch(updateNewMessageBodyCreator(body));
//         },
//         sendMessage: () => {
//             dispatch(sendMessageCreator());
//         }
//     }
// }

export default connect(mapStateToProps,
    {sendMessage, updateNewMessageBody}
    )(Dialogs);