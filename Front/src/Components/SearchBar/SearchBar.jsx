import "./Searchbar.css"


export default function Searchbar(){
    return(
        <div className="searchbar">
            <input  type="text" placeholder="Entrer le titre de la rubrique que vous cherchez"/>
			<span className="material-symbols-outlined">search</span>
            
        </div>
       
    )
}