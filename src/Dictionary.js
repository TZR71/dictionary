import React, {useState} from "react";
import axios from "axios";
import "./Dictionary.css";


export default function Dictionary(){
    let [keyword, setKeyword]=useState("");

    function handleResponse(response){
        console.log(response.data);
    }

    function search(event){
      event.preventDefault();

      //documentation: https://www.shecodes.io/learn/apis/dictionary
      const apiKey = "eb0432d8499otf6b1e6a9e4fe11cf387";
      let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
      axios.get(apiUrl).then(handleResponse);
    }
    
    
    
    
    function handleKeywordChange(event){
        console.log(event.target.value);
        setKeyword(event.target.value);
        }

  return (
     <div className="Dictionary">

      <form onSubmit={search}>
        <input type="search" onChange={handleKeywordChange}/>
    
        </form>
     </div>
     );


}