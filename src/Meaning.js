import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props){
    //console.log(props.meaning.synonyms);

    return (
      <div className="Meaning">
        <h3>{props.meaning.partOfSpeech}</h3>
        <strong>Definition:</strong>
        <p>{props.meaning.definition}</p>
        <br />
        <strong>Example:</strong>
        <p>{props.meaning.example}</p>
        <br />
        <strong>Synonyms:</strong>
        <Synonyms synonyms={props.meaning.synonyms} />
      </div>
    );
}