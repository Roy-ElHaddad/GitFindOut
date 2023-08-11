import {useState} from 'react';
import SearchBar from "../Components/Searchbar/SearchBar"
import Creationbar from "../Components/CreationBar/CreationBar"
import Rubriques from "../Components/Rubriques/Rubriques"

export default function Dashboard(){
    const [rub, setRub] = useState([]);
    const [input, setInput] = useState('');

    return(
        <>
        <SearchBar />
        <Creationbar input={input} setInput={setInput} rub={rub} setRub={setRub} />
        <Rubriques  rub ={rub} setRub={setRub}/>

        </>
    )
}