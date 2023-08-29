import axios from "axios";
import { useEffect , useState } from "react";
import "./Rubriques.css";

export default function Rubriques({ rub, setRub }) {
    const [isOpen, setIsOpen] = useState(false);
    const [msg , setMsg] = useState('');
    const [userId , setUserId] = useState('');

    const openPopup = (key) => {
        setMsg(key)
        setIsOpen(true);
    };
  
    const closePopup = () => {
        setIsOpen(false);
    };

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
           setUserId(response.data.userId);
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
    };

    //TODO modify the rubriques
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
                        <button onClick={() => handleRemoveRub(r.key)} >
                            <span className="material-symbols-outlined">
                                remove_circle
                            </span>
                        </button>
                        <button className="share" onClick={() => openPopup(r.key)}>
                            <span className="material-symbols-outlined">
                                share
                            </span>
                        </button>
                            {isOpen && (
                                <div className="popup">
                                <div className="popup-content">
                                    <span className="close" onClick={closePopup}>&times;</span>
                                    <p>Le code pour partager cette rubrique est: {userId}{msg}</p>
                                </div>
                                </div>
                            )}
                    </div>
                </li>
            ))}
        </div>
    );
}
