import React, {useState} from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";


export default function Dictionary(props){
    let [keyword, setKeyword]=useState(props.defaultKeyword);
    let [results, setResults]=useState(null);
    let [loaded, setLoaded]=useState(false);
    let [photos, setPhotos]=useState(null);

    function handleDictionaryResponse(response){
       // console.log(response.data);
       //console.log(response.data.meanings[0].definition);
        setResults(response.data);
    }
    function handleImgResponse(response){
     // console.log(response.data);
     setPhotos(response.data.photos);

    }
   

    function search(){
      //documentation: https://www.shecodes.io/learn/apis/dictionary
      const apiKey = "eb0432d8499otf6b1e6a9e4fe11cf387";
      let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
      axios.get(apiUrl).then(handleDictionaryResponse);

      let imgUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${apiKey}`;
      axios.get(imgUrl).then(handleImgResponse);
    }

    function handleSubmit(event){
      event.preventDefault();
      search();      
    }           
    
    function handleKeywordChange(event){
        //console.log(event.target.value);
        setKeyword(event.target.value);
        }

        function load(){
          setLoaded(true);
          search();
        }

        if(loaded){
          return (
            <div className="Dictionary">
              <section className="Question">
                <h1>Meanings & Definitions of English Words</h1>
                <form onSubmit={handleSubmit}>
                  <input
                    type="search"
                    onChange={handleKeywordChange}
                    defaultValue={props.defaultKeyword}
                  />
                </form>
              </section>
              <Results results={results} />
              <Photos photos={photos}/>
            </div>
          );
        }else{
          load();
          return "Loading dictionary..";

        }
}