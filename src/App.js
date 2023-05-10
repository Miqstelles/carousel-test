import './App.css';
import { carousel } from './data';
import { useState } from 'react';

function App() {
  const [index, setIndex] = useState(0)
  let img = carousel[index]

  setTimeout(() => {
    index === 2 ? setIndex(0) : setIndex(index + 1)
  }, 5000)


  return (
    <div className="App">
      <header className="App-header">
        <button>NEXT</button>
        <img src={img.url} alt="teste" title="teste" />
      </header>
    </div>
  );
}

export default App;
