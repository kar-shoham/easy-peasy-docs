import { createStore } from "easy-peasy";
import { StoreModel } from "./models";
import { counterModel } from "./counter";
import { pokemonModel } from "./pokemon";

export const store = createStore<StoreModel>({
  counter: counterModel,
  pokemon: pokemonModel
});
