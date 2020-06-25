import React from 'react';

function MyPillCard(props) {

    return (
        <div>
            <div>{props.drugTitle}</div>
            <div>{props.quantity}</div>
            <div>{props.hour}</div>
            <div>{props.note}</div>
            <button>I've taken the pill</button>
        </div>

    )
}

export default MyPillCard