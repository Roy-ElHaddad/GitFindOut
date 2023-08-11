// import React from "react";
// import "./Rubriques.css";

// export default function Rubriques({ rub , setRub}) {
//     return (
//         <div className="main-container">
//             {rub.map((r) => (
//                 <li className="rubriques-container" key={r.id}>
//                     <h1> {r.key} :</h1>
//                     <div className="rubriques-input">
//                         <input type="text" value={r.title} readOnly />
//                     </div>
//                     <div className="rubriques-submit">
//                         <button className="modify">
//                             <span className="material-symbols-outlined">
//                                 move_group
//                             </span>
//                         </button>
//                         <button>
//                             <span className="material-symbols-outlined">
//                                 remove_circle
//                             </span>
//                         </button>
//                     </div>
//                 </li>
//             ))}
//         </div>
//     );
// }
import React from "react";
import "./Rubriques.css";

export default function Rubriques({ rub, setRub }) {
    const handleRemoveRub = (id) => {
        const updatedRub = rub.filter((r) => r.id !== id);
        setRub(updatedRub);
    };

    return (
        <div className="main-container">
            {rub.map((r) => (
                <li className="rubriques-container" key={r.id}>
                    <h1> {r.key} :</h1>
                    <div className="rubriques-input">
                        <input type="text" value={r.title} readOnly />
                    </div>
                    <div className="rubriques-submit">
                        <button className="modify">
                            <span className="material-symbols-outlined">
                                move_group
                            </span>
                        </button>
                        <button
                            onClick={() => handleRemoveRub(r.id)} // Call the handler with the rub's ID
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
