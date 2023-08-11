import  {useState} from "react"
import FormButton from '../FormButton/FormButton';
import "./Form.css"

export default function signupForm ({handleSubmit}){
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')


    
   
    const submitForm = (e) => {
        e.preventDefault();
        // console.log({name, email, password, confirmPassword})
        handleSubmit(name, email, password, confirmPassword)
    }
   
    return(
        <>
            <form action="/Signup"  onSubmit={submitForm}>
                <h2 className='form_Title'>Créez votre compte</h2>
                <label htmlFor="username">Pseudo :</label>
                <input type="text"  name="username" id="username" onChange={(e) => setName(e.target.value)} />
                <label htmlFor="email">Mail :</label>
                <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)} />
                <label htmlFor="password">Mot de passe :</label>
                <input type="password" name="password" id="password" onChange={(e) => setPassword(e.target.value)} />
                <label htmlFor="confirmPassword">Confirmation du mot de passe :</label>
                <input type="password" name="confirmPassword" id="confirmPassword" onChange={(e) => setConfirmPassword(e.target.value)} />
            </form>
            <FormButton onPress={submitForm} title={"Créez votre compte"}/>

        </> 
    )
}