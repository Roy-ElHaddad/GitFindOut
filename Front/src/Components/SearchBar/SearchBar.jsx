import "./Searchbar.css"
import {useState , useEffect }from "react"
import axios from "axios"

export default function Searchbar({setRub}){
    const [srchInpt , setSrchInpt] = useState('')

    const getRubs = async () => {
        try {
            const response = await axios.get(
                `http://localhost:3000/api/get-rubrique/search?title=${srchInpt}`,
                    {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                    },
                }
            );
            setRub(response.data.data);
        } catch (error) {
            console.error('Error finding rubrique:', error);
        }
    }

    useEffect(() => {
            getRubs(); // Call getRubs whenever srchInpt changes
    }, [srchInpt])

    return(
        <div className="searchbar-container">
            <div className="searchbar">
                <input  type="text" placeholder="Entrer le titre de la rubrique que vous cherchez" onChange={(e) => setSrchInpt(e.target.value)} />
                <button  onClick={getRubs}><span className="material-symbols-outlined">search</span></button>
            </div>
        </div>
    )
}