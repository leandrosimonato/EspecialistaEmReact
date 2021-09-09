import logo from './heart.svg';
import './App.css';
import Form from './Components/Form';



function App() {



  return (
    <div className="App">
      <header className="App-header">
        <Form />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Interligação com formulários
        </p>
      </header>
    </div>
  );
}

export default App;
