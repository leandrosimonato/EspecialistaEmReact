import React from 'react';
import logo from './logo.svg';
import './App.css';
//import HelloWorld from './HelloWorld';

const Component = React
  .createElement('div', {style: {background: 'gold'}}, null, 'Olá, Mundo do React!')

  const HTMLElement = document.createElement('div')
  HTMLElement.style.background ='orange'
  HTMLElement.innerText = 'Olá, Mundo do React com DOM!';

  console.log(Component)
  console.dir(HTMLElement)

  document.body.appendChild(HTMLElement)
  //document.body.appendChild(Component)

function App() {
  return (
    <div className="App">
      {Component}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        Como o JSX é Renderizado no DOM
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
