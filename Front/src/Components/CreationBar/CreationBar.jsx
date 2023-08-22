import axios from 'axios';
import "./Creationbar.css"
import { v4 as uuidv4 } from "uuid";

function generateBase36Number() {
    const randomBase10 = Math.floor(Math.random() * Math.pow(36, 4));
    const base36Number = randomBase10.toString(36).padStart(4, '0');
    return base36Number;
}

export default function Creationbar({ input, setInput, rub, setRub }) {
    
    const onFormSubmit = async (e) => {
       e.preventDefault();
       const rubKey = generateBase36Number();
       try {
           const response = await axios.post(
               'http://localhost:3000/api/create-rubrique',
               {
                   title: input,
                   key: rubKey,
               },
               {
                   headers: {
                       Authorization: `Bearer ${localStorage.getItem('token')}`,
                   },
               }
           );
           console.log(response.data.message);
           setRub(response.data.data);
       } catch (error) {
           console.error('Error creating rubrique:', error);
       }
       setInput('');
   };    

    return (
        <form className="creationbar-container" onSubmit={onFormSubmit}>
            <h1> Titre de la rubrique :</h1>
            <div className="creationbar-input">
                <input
                    type="text"
                    placeholder="Entrer le titre de la rubrique"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
            </div>
            <div className="creationbar-submit">
                <button type="submit"><span className="material-symbols-outlined">add_circle</span></button>
            </div>
        </form>
    );
}
