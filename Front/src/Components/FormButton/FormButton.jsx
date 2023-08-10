import React from 'react';
import "./FormButton.css";

export default function FormButton ({onPress ,title}) {
    return(
        <button className= 'form_button' type="submit" onClick={onPress} >{title}</button>
    );
}