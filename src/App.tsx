// import { useStoreState } from 'easy-peasy'
import React from 'react'
import { useStoreActions, useStoreState } from './store/hooks'
import { PokemonModel } from './store/models';
import { useStoreRehydrated } from 'easy-peasy';

const App = () => {
  // let {counter} = useStoreState<CounterModel>(state => state.data) // to not keep doing this again and again, we use hooks
  // let {counter} = useStoreState(state => state.counter.data) // we dont have to declare the types here in this case
  // let {add, subtract, customOperation} = useStoreActions(actions => actions.counter)
  let {pokemons} = useStoreState(state => state.pokemon)
  let {getPokemons, unsetPokemons} = useStoreActions(actions => actions.pokemon)
  let isRehydrated = useStoreRehydrated() //rehydrated will tell us if store is persisted (retrieved from session storage)
  return (
    <div>
    {/* <div>{counter}</div>
    <button onClick={() => customOperation(1)}>INC</button>
    <button onClick={() => subtract(1)}>DEC</button> */}
    <button onClick={() => getPokemons()}>getPOKEMONS</button>
    
    {isRehydrated
    ?
    <ul>
      {pokemons.map((pokemon: PokemonModel, idx) => (<li key={idx}>{pokemon.name}</li>))}
    </ul>
    : 
    <h1>Loading...</h1>
    } 
    <button onClick={() => unsetPokemons([])}>removePOKEMONS</button>
    </div>
  )
}

export default App