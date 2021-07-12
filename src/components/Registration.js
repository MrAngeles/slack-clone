import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'; 
import axios from 'axios'

function Registration(props) {

    // const url = "http://206.189.91.54//api/v1/auth/"
    const [user, setUser] = useState({
        email: '',
        password: '',
        password_confirmation: ''
    })

    let history = useHistory ();

    const signInHandleClick = () => {
        props.setRegister(false)
        history.push('/login');
    }  

    const submit = (e) => {
        e.preventDefault()
        
        var data = {
            email: user.email,
            password: user.password,
            password_confirmation: user.password_confirmation
        }

        var config = {
            method: 'post',
            url: 'http://206.189.91.54//api/v1/auth/',
            headers: { 'Content-Type': 'application/json', 'crossDomain': true, 'Accept': 'application/json'},
            data : JSON.stringify(data)
        };

        axios(config)
        .then(function (response) {
            console.log(response)
        })
        .then(result => console.log(result))
        .catch(response => {
            console.log(response.response.data.errors.full_messages[0]);
        });

       
    }

    const inputChangeHandler = (e) => {
        const newUser = {...user}
        newUser[e.target.id] = e.target.value
        setUser(newUser)
    }


    return (
        <div>
            <h1>Registration</h1>
            <form onSubmit={(e) => submit(e) }> 
                <input onChange={(e) => inputChangeHandler(e)} type="email" placeholder="Email" id="email"/>
                <input onChange={(e) => inputChangeHandler(e)} type="password" placeholder="Password" id="password"/>
                <input onChange={(e) => inputChangeHandler(e)} type="password" placeholder="confirm Password" id="password_confirmation"/>
                <button>Submit</button>
                <button onClick={signInHandleClick}>Already have an account</button>
            </form>
        </div>
    )
}

export default Registration
