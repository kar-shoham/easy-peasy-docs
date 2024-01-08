import axios from "axios";
import { action, thunk } from "easy-peasy";
import { url } from "../api";
import { PokemonListModel } from "./models";

export const pokemonModel: PokemonListModel = {
    pokemons: [],
    setPokemons: action((state, payload) => {
        state.pokemons = payload;
    }),
    getPokemons: thunk(async(actions) => {
        let data = await axios.get(url)
        actions.setPokemons(data.data.results)
    }),
    unsetPokemons: action((state) => {
        state.pokemons = [] // simple this is enough
    })
}