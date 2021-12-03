import React from 'react';
import * as PokeDX from 'pokeapi-js-wrapper';
import { useState, useEffect } from 'react';

const List = () => {
    const P = new PokeDX.Pokedex();
    const [pokemons, setPokemons] = useState();

    useEffect(() => {
        (async () => {
            await getPokemons();
        })()
    }, [])

    const getPokemons = async () => {
        const interval = {
            offset: 34,
            limit: 10,
          }
        const pokemons = await P.getPokemonsList(interval);
        console.log(pokemons.results)
        setPokemons(pokemons.results);
    }

    const getPokemon = async ({ name = ''}) => {
        const pokemon = await P.getPokemonByName(name);
        return pokemon;
    }

    return (
        <>
            {pokemons?.map(({ name }) =>
                <div key={name}>
                    <img src={() => getPokemon(name)?.sprites?.front_default} alt="" />
                    <h1>
                        {name}
                    </h1>
                </div>
            )}
        </>
    )
}

export default List;
