import React from 'react';
import '../App.css'

function RedTextError(props) {
    return (
        <div className={'error'}>
            {props.children}
        </div>
    );
}

export default RedTextError;