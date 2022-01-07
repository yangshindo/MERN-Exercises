import React, { useRef } from 'react';
import Axios from 'axios';
import swal from 'sweetalert';

function CreateUser() {

    const userRef = useRef()


    function submitHandler(event) {
        event.preventDefault()

        const userCurrentValue = userRef.current.value
        const user = {username: userCurrentValue}


        Axios.post('http://localhost:5000/users/add', user)
        .then(res => console.log(res.data))
        .then(swal("User Created!"))

        setTimeout(() => window.location = "/", 2500)
    }


    return (
        <div>
            <h3>Create New User</h3>
            <form onSubmit={submitHandler}>
                <div className="form-group">
                    <label>Username: </label>
                    <input ref={userRef} type="text" className="form-control"></input>
                    </div>
                    <br />
                    <div className="form-group">
                    <input type="submit" value="Submit" className="btn btn-primary"></input>
                </div>
            </form>
        </div>
    )
}


export default CreateUser