import React from "react";
import {sendMessage, updateNewMessageBody} from "../../redux/reducers/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {Navigate} from "react-router-dom";
import {withAuthNavigate} from "../../hoc/withAuthNavigate";

class DialogsContainer extends React.Component {

    componentDidMount(){

    }

    render(){
        if (!this.props.isAuth) {
            return <Navigate to={"/login"} />
        }

        return <Dialogs {...this.props} />
    }
}

let AuthNavigateComponent = withAuthNavigate(DialogsContainer);

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

export default connect(mapStateToProps, {sendMessage, updateNewMessageBody})(AuthNavigateComponent);