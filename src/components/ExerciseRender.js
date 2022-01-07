import React from 'react'

function ExerciseRender(props) {

    function handleClick() {
        props.onDelete(props.id)
    }

    return (
        <li>
        <h3>{props.description}</h3>
        <p>Duration: {props.duration} minutes</p>
        <p>Date: {props.date}</p>
        Created by: {props.username}
        <br />
        <br />
        <button onClick={handleClick}> Delete </button>
        <br />
        ____________________________________
        <br />
                </li>
    )
}

export default ExerciseRender