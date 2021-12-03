import logo from './logo.svg';
import './App.css';
import * as Pokedex from 'pokeapi-js-wrapper';
import {useState, useEffect} from 'react';

function App() {
  const P = new Pokedex.Pokedex();
  
  const [golduck, setGolduck] = useState()

  useEffect(()=>{
    (async () => {
      const golduck = await getGolduck()
      setGolduck(golduck)
    })();
  },[]) 

  const getGolduck = async () => {
    const golduck = await P.getPokemonByName('mewtwo')
    console.log(golduck)
    return golduck
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={golduck?.sprites?.front_default} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
