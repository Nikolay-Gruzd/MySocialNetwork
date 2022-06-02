import React from "react"
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatus, getUsersProfile, updateStatus} from "../../redux/reducers/profile-reducer";
import {withAuthNavigate} from "../../hoc/withAuthNavigate";
import withRouter from "../../hoc/withRouter";
import {compose} from "redux";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.router.params.userId;
        if (!userId) {
            userId = 23345;
        }
        this.props.getUsersProfile(userId);
        this.props.getStatus(userId);
    }

    render() {
        return (
            <Profile
                {...this.props}
                profile={this.props.profile}
                status={this.props.status}
                updateStatus={this.props.updateStatus}
            />
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
})

export default compose(
    connect(mapStateToProps, {getUsersProfile, getStatus, updateStatus}),
    withRouter,
    // withAuthNavigate
)(ProfileContainer)