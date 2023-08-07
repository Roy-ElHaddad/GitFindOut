
function Signup(){
    return(
        <div>
            <h2>Signup Page</h2>
            <form action="/Signup" method="post">
                <label htmlFor="psuedo">Psuedo:</label>
                <input type="text" name="psuedo" id="psuedo" />
                <label htmlFor="mail">Mail:</label>
                <input type="text" name="mail" id="mail" />
                <label htmlFor="password">Password:</label>
                <input type="password" name="password" id="password" />
                <label htmlFor="confirmPassword">Confirm password:</label>
                <input type="password" name="confirmPassword" id="confirmPassword" />
                <button type="submit">Sign up</button>
            </form>
        </div>
    )
}

export default Signup;