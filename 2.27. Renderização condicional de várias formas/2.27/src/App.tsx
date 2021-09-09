import logo from './heart.svg';
import './App.css';
import Post, { PostObject } from './Components/Post';
import { useState } from 'react';
import Card from './Components/Card';

function App() {
  console.log('Redenrizou o App')
  const [post, setPost] = useState<PostObject | undefined>({
    title: 'Título maneiro',
    content: 'E um sub título'
  })

  return (
    <div className="App">
      <header className="App-header">
        
        {
          !!post &&
            <Card align="left" title={"Card"}>
              <Post post={post} totalComments={12} />
          </Card>
          //: null pode ser null mais não é essencial para o código!
          
        }
        <button onClick={() => setPost(undefined)}>
          Remover post
        </button>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Renderização condicional de várias formas
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
