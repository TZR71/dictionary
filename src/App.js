
import './App.css';
import Dictionary from './Dictionary';

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"></header>
        <main>
          <Dictionary defaultKeyword="sunrise" />
        </main>

        <footer className="App-footer">
          This project was created by{" "}
          <a
            href="https://github.com/TZR71"
            target="_blank"
            rel="noopener noreferrer">
            Tiina Rojola{" "}
          </a>
          and is open-sourced on{" "}
          <a
            href="https://github.com/TZR71/dictionary"
            target="_blank"
            rel="noopener noreferrer">
            GitHub{" "}
          </a>
          and hosted on <a
            href="https://dictionary-tr.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"> Netlify. </a>                   
        </footer>
      </div>
    </div>
  );
}


