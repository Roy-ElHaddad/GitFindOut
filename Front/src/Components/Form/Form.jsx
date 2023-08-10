import "./Form.css"
import { useState } from "react"
import FormButton from "../FormButton/FormButton"

export default function Form ({loginEvent}) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const loginCheck = (e) =>{
        e.preventDefault();
        loginEvent(email, password);
    }

    return(
        <>
            <form action="/Login" onSubmit={loginCheck}>
                <h2 className='form_Title'>Déja inscrit ?</h2>
                <label htmlFor="email">Mail :</label>
                <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)}  />
                <label htmlFor="password">Mot de passe:</label>
                <input type="password" name="password" id="password" onChange={(e) => setPassword(e.target.value)}/>
            </form>
            <FormButton onPress={loginCheck} title={"Se connecter"}/>

        </> 
    )
}
