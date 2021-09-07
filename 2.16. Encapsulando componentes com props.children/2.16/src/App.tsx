import logo from './heart.svg';
import './App.css';
import Post from './Components/Post';
import { useState } from 'react';
import { title } from 'process';
import Card from './Components/Card';

function App() {

  const [post] = useState({
    title: 'Título maneiro',
    content: 'E um sub título'
  })

  

  return (
    <div className="App">
      <header className="App-header">
        <Card title={"Card"}>
          <Post post={post} totalComments={12}/>
        </Card>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Encapsulando componentes com props.children
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
