import logo from './heart.svg';
import './App.css';




function App() {
const names = ['Leandro', 'Ana Carolina', 'Antonella']


  return (
    <div className="App">
      <header className="App-header">
        <ul>
          { //Key={id} geralmente usa seu id por ser único.
            names.map((name, index) => <li key={index}>{name}</li>)
          }
        </ul>
        <img src={logo} className="App-logo" alt="logo" />
            <p>
              Renderizando listas
            </p>
      </header>
    </div>
  );
}

export default App;
