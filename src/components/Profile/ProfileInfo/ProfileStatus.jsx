import React from 'react';
import classes from "./ProfileInfo.module.css";

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    activeEditMode = () => {
        this.setState(
            {
                editMode: true
            }
        )
    }

    deActiveEditMode = () => {
        this.setState(
            {
                editMode: false
            }
        )
        this.props.updateStatus(this.state.status)
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    render() {
        return (
            <div>
                {!this.state.editMode
                    ? <div>
                        <span onDoubleClick={this.activeEditMode}>{this.props.status || "Установить статус"}</span>
                    </div>
                    : <div>
                        <input
                            onChange={this.onStatusChange}
                            autoFocus={true}
                            onBlur={this.deActiveEditMode}
                            value={this.state.status}
                        />
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;