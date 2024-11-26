
import './App.css';
import Dictionary from './Dictionary';



export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"></header>
        <main>
          <Dictionary />
        </main>

        <footer className="App-footer">
          Coded by{" "}
          <a href="https://github.com/TZR71/dictionary">Tiina Rojola</a>
        </footer>
      </div>
    </div>
  );
}


