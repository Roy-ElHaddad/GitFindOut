import axios from "axios";
import { useEffect } from "react";
import "./Rubriques.css";

export default function Rubriques({ rub, setRub }) {
    const onLoad = async () => {
       try {
           const response = await axios.get(
               'http://localhost:3000/api/get-rubrique',
                   {
                   headers: {
                       Authorization: `Bearer ${localStorage.getItem('token')}`,
                   },
               }
           );
           console.log(response.data);
           setRub(response.data.data);
       } catch (error) {
           console.error('Error creating rubrique:', error);
       }
   };

    const handleRemoveRub = async (key) => {
        try {
            const response = await axios.post(
                'http://localhost:3000/api/remove-rubrique',
                    {
                        key: key
                    },
                    {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                    },
                }
            );
            console.log(response.data);
            setRub(response.data.data);
        } catch (error) {
            console.error('Error creating rubrique:', error);
        }
        // const updatedRub = rub.filter((r) => r.key !== key);
        // setRub(updatedRub);
    };

    const handleRoute = (key) => {
        const updatedRub = rub.filter((r) => r.key !== key);
        setRub(updatedRub);
    };
    useEffect(() => {
        onLoad()
    },[])

    return (
        <div className="main-container">
            {rub.map((r) => (
                <li className="rubriques-container" key={r.key}>
                    <h1> {r.key} :</h1>
                    <div className="rubriques-input">
                        <input type="text" value={r.title} readOnly />
                    </div>
                    <div className="rubriques-submit">
                        <button className="modify" onClick={() => handleRoute(r.id)}>
                            <span className="material-symbols-outlined">
                                move_group
                            </span>
                        </button>
                        <button
                            onClick={() => handleRemoveRub(r.key)} // Call the handler with the rub's ID
                        >
                            <span className="material-symbols-outlined">
                                remove_circle
                            </span>
                        </button>
                    </div>
                </li>
            ))}
        </div>
    );
}
