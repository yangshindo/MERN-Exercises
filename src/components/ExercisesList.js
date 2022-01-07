import React, { useState } from 'react';
import Axios from 'axios';
import ExerciseRender from './ExerciseRender'

function ExercisesList() {

    const [exerciselist, setExerciselist] = useState([])
    
    Axios.get('http://localhost:5000/exercises/')
    .then(response => {
        if (response.data.length > 0) {
        const newList = response.data
        setExerciselist(newList)}
    })



function deleteExercise(id) {
  Axios.delete('http://localhost:5000/exercises/'+id)
  .then(res => console.log(res.data))
  .then(setExerciselist((prevValue) => {
    return prevValue.filter(ex => ex._id !== id)
  }))
} 

    function createExercise(ex) {
        return (
            <ExerciseRender
            key= {ex._id}
            id= {ex._id}
            description={ex.description} 
            duration={ex.duration}
            date={ex.date}
            username={ex.username}
            onDelete={deleteExercise}/>
        )
    }

    
    const mappedExerciseList = exerciselist.map(createExercise)
    
    return (
        <div>
            <ul>
                {mappedExerciseList}
            </ul>
        </div>
    )
}

export default ExercisesList