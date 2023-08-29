import { useState } from "react";
import axios from "axios";

function Home(){
    const [value, setValue] = useState('')
    const [info ,setInfo] = useState('')
    const getInfo = async () => {
        console.log(value)
        const rubKey = value.slice(-4);
        const ownerId = value.slice(0, -4);
        console.log('Owner ID:', ownerId);
        console.log('Rub Key:', rubKey);
        try {
            const response = await axios.get(`http://localhost:3000/api/getInfo?ownerId=${ownerId}&rubKey=${rubKey}`)
            console.log(response.data.data)
            setInfo(response.data.data)
        } catch (error) {
            console.log(error)
        }
    }
    return(
        <div className="inputContainer">
            <h1>Entrer le code de visualisation de l’information</h1>
            <div className="inputBar">
                <input  type="text" placeholder="Saisie du code de visualisation de l’information" onChange={(e) => setValue(e.target.value)}/>
                <button className="confirmButton" onClick={() => getInfo()}>
                <span className="material-symbols-outlined">arrow_forward</span>    
                </button>
            </div>
                { info && <div className="infoContainer">
                    <textarea readOnly value={info} />
                </div>}
        </div>
    )
}

export default Home;