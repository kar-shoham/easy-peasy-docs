import { Action, Thunk } from "easy-peasy"

interface DataModel{
    counter: number
}

export interface CounterModel{
    data: DataModel,
    add: Action<CounterModel, number>, //second parameter is the payload received
    subtract: Action<CounterModel, number>,
    customOperation: Thunk<CounterModel, number>
}



export interface PokemonModel {
    name: string,
    url: string
}


export interface PokemonListModel{
    pokemons: PokemonModel[],
    setPokemons: Action<PokemonListModel, PokemonModel[]>,
    getPokemons: Thunk<PokemonListModel, PokemonModel[] | undefined>,
    unsetPokemons: Action<PokemonListModel, PokemonModel[] | undefined>
}

export interface StoreModel{
    counter: CounterModel,
    pokemon: PokemonListModel
}
