import { Link } from 'react-router-dom'
import FormButton from '../Components/FormButton/FormButton';
import Form from '../Components/Form/Form';
function Login(){
    const loginEvent = () =>{}
    return(
        <>
            <div className='form_section'>
                <Form/> 
                <FormButton onPress={loginEvent} title={"Se connecter"}/>
                <p className='formp'>Pas encore inscrit ? <Link to="/Signup" className='formLink'>Inscrivez vous.</Link></p>
            </div>
        </>
    )
}

export default Login;