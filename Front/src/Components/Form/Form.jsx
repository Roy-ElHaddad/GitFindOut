import "./Form.css"
export default function Form (){
    return(
        <>
            <form action="/Login" method="post">
                <h2 className='form_Title'>Déja inscrit ?</h2>
                <label htmlFor="username">Pseudo/Mail :</label>
                <input type="text" name="username" id="username" />
                <label htmlFor="password">Mot de passe:</label>
                <input type="password" name="password" id="password" />
            </form>
        </> 
    )
}