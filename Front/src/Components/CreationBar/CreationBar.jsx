import "./Creationbar.css"

export default function Creationbar() {
    return (
        <div className="creationbar-container">
            <div className="creationbar-title">
                <h1>Code de la rubrique : </h1>
            </div>
            <div className="creationbar-input">
                <input type="text" placeholder="Entrer le titre de la rubrique" />
            </div>
            <div className="creationbar-submit">
                <button><span className="material-symbols-outlined">add</span></button>
            </div>
        </div> 
    )
}