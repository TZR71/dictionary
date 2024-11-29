import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props){  
    return (
      <div className="Meaning">
        <h3>{props.meaning.partOfSpeech}</h3>
        <strong>Definition:</strong>
        <p>{props.meaning.definition}</p>
       
        {props.meaning.example && (
          <>
            <strong>Example:</strong>
            <p>{props.meaning.example}</p>
          </>
        )}        
        {props.meaning.synonyms && (
          <>
            <strong>Synonyms:</strong>
            <Synonyms synonyms={props.meaning.synonyms} />
          </>
        )}
      </div>
    );
}