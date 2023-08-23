import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Form from '../Components/Form/Form';
// import "./App.css"

function Login(){
    const [errorMessage, setErrorMessage] = useState('');

    const loginEvent = async(email, password) =>{
        try{
            const response = await axios.post('http://localhost:3000/api/auth', {
                email:email,
                password:password
            })
            localStorage.setItem('token', response.data.token)
            if (response.status === 200) {
                window.location.href = '/Dashboard'
            }
        }
        catch(error){ 
            setErrorMessage(error.response.data?.message || error.response.data)
            console.log(error.response.data)
            console.log(error.response.data.message)
        }
    }
    return(
        <>
            <div className='form_section'>
                {errorMessage && <p className="error-message">{errorMessage}</p>}
                <Form loginEvent={loginEvent}/> 
                <p className='formp'>Pas encore inscrit ? <Link to="/Signup" className='formLink'>Inscrivez vous.</Link></p>
            </div>
        </>
    )
}

export default Login;