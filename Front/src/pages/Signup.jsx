import {useState} from "react"
import axios from 'axios';
import FormSignup from '../Components/Form/FormSignup';

function Signup(){
    const [errorMessage, setErrorMessage] = useState('');


    const handleSubmit = async (name,email,password,confirmPassword) => {
        // console.log({name,email,password,confirmPassword})
        if(password!== confirmPassword){
            alert("Passwords do not match")
        }
        else{
            try{
                const response = await axios.post('http://localhost:3000/signup',{
                    name:name,
                    email:email,
                    password:password
                })
                // console.log(response.data)
                // console.log(response)
                if (response.status === 201) {
                    setErrorMessage('');
                }
            }
            catch(err){
                if (err.message === "Request failed with status code 409"){
                    alert('User already exists');
                    setErrorMessage('User already exists');
                }
                    console.log(err)} 
        }
    }
    return(
           <div className='signupForm_section'>
                {errorMessage && <p className="error-message">{errorMessage}</p>}
                <FormSignup handleSubmit={handleSubmit}/> 
            </div>
    )
}

export default Signup;