import React from "react";  
import Meaning from "./Meaning";
import "./Results.css";


//receives <Results results={results}/> from Dictionary.js
export default function Results(props){  
    if(props.results){
      return (
        <div className="Results">
          <section className="Word">
            <h2>{props.results.word}</h2>
            <h3>
              <i>[ {props.results.phonetic} ]</i>
            </h3>
          </section>
          {props.results.meanings.map(function (meaning, index) {
            return (
              <section key={index}>
                <Meaning meaning={meaning} />
              </section>
            );
          })}
        </div>
      );
        
    } else {        
    return null;
  }
}

