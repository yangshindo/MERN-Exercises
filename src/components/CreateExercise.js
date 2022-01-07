import React, { useState, useRef , useEffect } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import Axios from 'axios';
import swal from 'sweetalert';


function CreateExercise() {

    const usernameRef = useRef()
    const descriptionRef = useRef()
    const durationRef = useRef()

    const [date, setDate] = useState("")
    const [userlist, setUserlist] = useState()


    Axios.get('http://localhost:5000/users/')
    .then(response => {
        const data = response.data
        if (data.length > 0) {
        const newList = data.map((user) => user.username)
        setUserlist(newList)}
    })



    function submitHandler(event) {
        event.preventDefault()
        const updatedUsername = usernameRef.current.value
        const updatedDescription = descriptionRef.current.value
        const updatedDurationRef = durationRef.current.value


        const exercise= {
            username: updatedUsername,
            description: updatedDescription,
            duration: updatedDurationRef,
            date: date.toLocaleString("pt-BR").split(' ')[0]
        }

        Axios.post('http://localhost:5000/exercises/add', exercise)
        .then(res => console.log(res.data))
        .then (swal("Exercise Added!"))

        setTimeout(() => window.location = "/", 2500)
    }

    return (
        <div>
            <h3>Create New Exercise Log</h3>
            <form onSubmit={submitHandler}>
                <div className="form-group">
                    <label>Username: </label>
                    <select required className="form-control" ref={usernameRef}>
                    {userlist ? userlist.map(function(user) {
                        return <option
                        key={user}
                        value={user}>{user}
                        </option>;
                    }) : null}
                    </select>
                </div>
                <div className="form-group">
                    <label>Description: </label>
                    <input type="text" required className="form-control" ref={descriptionRef}></input>
                </div>
                <div className="form-group">
                    <label>Duration (in minutes): </label>
                    <input type="text" required className="form-control" ref={durationRef}></input>
                </div>
                <div className="form-group">
                    <label>Date: </label>
                    <DatePicker selected={date} onChange={(d) => setDate(d)} />
                </div>
                <br />
                <div className="form-group">
                    <input type="submit" value="Create Exercise Log" className="btn btn-primary"></input>
                </div>
            </form>
        </div>
    )
}


export default CreateExercise