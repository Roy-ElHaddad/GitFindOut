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
        const rubKey = generateBase36Number();
        e.preventDefault();
        setRub([...rub, { title: input, key: rubKey, id: uuidv4() }])
        setInput('');
        // try {
        //     // Send rubrique data to the backend API
        //     const response = await axios.post('http://localhost:3000/create-rubrique', {
        //         title: input,
        //         key: rubKey,
        //     });

        //     // Assuming the backend responds with the created rubrique object
        //     const newRubrique = response.data;

        //     // Update the rub state with the new rubrique
        //     setRub([...rub, newRubrique]);

        //     setInput(''); // Clear the input field
        // } catch (error) {
        //     console.error('Error creating rubrique:', error);
        // }
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
