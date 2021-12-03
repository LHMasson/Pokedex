import React from 'react';
import * as PokeDX from 'pokeapi-js-wrapper';
import { useState } from 'react';

const Pokedex = () => {
    const P = new PokeDX.Pokedex();
  
    const [pokemon, setPokemon] = useState()
    const [search, setSearch] = useState()
    const [spriteFace, setSpriteFace] = useState()

    const getPokemon = async () => {
        const pokemon = await P.getPokemonByName(search);
        console.log(pokemon);
        setPokemon(pokemon);
    }

    const nextSprite = () => {
        const sprites = Object.values(pokemon?.sprites);
        const newSprite = sprites[sprites.indexOf(spriteFace) + 1] ?? sprites[sprites.indexOf(spriteFace) + 2] ;
        
        newSprite instanceof Object
            ? setSpriteFace(sprites[0])
            : setSpriteFace(newSprite);
    }

    return (
        <>
            <div>
                <input
                    type="text"
                    onChange={e => setSearch(e.target.value)}
                />
                <button onClick={getPokemon}>
                    Pesquisar
                </button>
                <br />
                <img src={spriteFace || pokemon?.sprites?.front_default} alt="" onClick={nextSprite} />
                <h1>
                    {pokemon?.name}
                </h1>

                {pokemon?.moves.map(({move}) => {
                    return (
                        <div key={move?.name}>
                            {move?.name}
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Pokedex;
