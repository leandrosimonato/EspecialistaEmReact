import logo from './heart.svg';
import './App.css';
import Sidebar from './Components/Sidebar';
import Post from './Components/Post';
import { useState } from 'react';
import { title } from 'process';

function App() {

  const [post, setPost] = useState({
    title: 'Título maneiro',
    content: 'E um sub título'
  })

  setTimeout(() => {
    setPost({
      title: 'Título maneiro, no setTimeout!',
      content: 'E um sub título, um retorno em outro forma com setTimeout!'
    })
  }, 5000)

  return (
    <div className="App">
      <header className="App-header">
        <Sidebar post={post} />
        <Post post={post} totalComments={12}/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Como funcionam as props dentro do React
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
