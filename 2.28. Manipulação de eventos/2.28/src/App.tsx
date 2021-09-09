import logo from './heart.svg';
import './App.css';

function App() {
  console.log('Redenrizou o App')

  //function teste (name: string) {
    //console.log('teste' + name)

    function handleclick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
      e.preventDefault()
    }


  return (
    <div className="App">
      <header className="App-header">
        <form action="/test">
          <button onClick={handleclick}> 
            Clique em mim!
          </button>
        </form>
        
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Manipulação de eventos
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
