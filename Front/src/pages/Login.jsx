import { Link  } from 'react-router-dom'
import axios from 'axios'
import Form from '../Components/Form/Form';

function Login(){
    const loginEvent = async(email, password) =>{
        try{
            const response = await axios.post('http://localhost:3000/login', {
                email:email,
                password:password
            })
            console.log(response.data);
            console.log("test");
            if (response.data.message === "Login Successful") {
                window.location.href = '/Dashboard'
            }
        }
        catch(error){ console.log(error) }
    }
    return(
        <>
            <div className='form_section'>
                <Form loginEvent={loginEvent}/> 
                <p className='formp'>Pas encore inscrit ? <Link to="/Signup" className='formLink'>Inscrivez vous.</Link></p>
            </div>
        </>
    )
}

export default Login;