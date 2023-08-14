import {useState} from "react"
import axios from 'axios';
import FormSignup from '../Components/Form/FormSignup';

function Signup(){
    const [errorMessage, setErrorMessage] = useState('');


    const handleSubmit = async (name,email,password,confirmPassword) => {
        console.log({name,email,password,confirmPassword})
        if(password!== confirmPassword){
            alert("Mots de passe ne correspondent pas")
        }
        else{
            try{
                const response = await axios.post('http://localhost:3000/api/users',{
                    name:name,
                    email:email,
                    password:password
                })
                console.log(response.data)
                
                if (response.status === 201) {
                    window.location.href = '/Dashboard'
                    setErrorMessage('');
                }
            }
            catch(err){
                if (err.message === "Request failed with status code 409"){
                    alert('Utilisateur déjà existant');
                    setErrorMessage('Utilisateur déjà existant');
                    window.location.href = '/Login'
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