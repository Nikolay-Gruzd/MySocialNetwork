import React from 'react';
import classes from "./Users.module.css";

const Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                photoUrl: "https://sun9-47.userapi.com/impg/UrsDR9X8K0nMG9XZ4Z2Mz8Ov0UWRUFyTFcndiw/Ge1i8nsyCns.jpg?size=320x305&quality=96&sign=774f8cbf25f19868e6d54878fb9516f8&type=album",
                followed: false,
                fullName: "Sergey",
                status: "i am a boss",
                location: {city: "Zima", country: "Russia"}
            },
            {
                id: 2,
                photoUrl: "https://sun9-47.userapi.com/impg/UrsDR9X8K0nMG9XZ4Z2Mz8Ov0UWRUFyTFcndiw/Ge1i8nsyCns.jpg?size=320x305&quality=96&sign=774f8cbf25f19868e6d54878fb9516f8&type=album",
                followed: true,
                fullName: "Sasha",
                status: "i am a boss",
                location: {city: "Irkutsk", country: "Russia"}
            },
        ])
    }
    ;

    return (
        <div>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photoUrl} alt="Avatar" className={classes.usersPhoto}/>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => {props.unfollow(u.id)}}> Unfollow </button>
                                : <button onClick={() => {props.follow(u.id)}}> Follow </button>
                            }
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.fullName}</div><div>{u.status}</div>
                        </span>
                        <span>
                            <div>{u.location.country}</div><div>{u.location.city}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    );
};

export default Users;