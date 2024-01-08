import { createStore, persist } from "easy-peasy";
import { StoreModel } from "./models";
import { counterModel } from "./counter";
import { pokemonModel } from "./pokemon";

// export const store = createStore<StoreModel>({
//   counter: counterModel,
//   pokemon: pokemonModel,
// });

// persist will basically store the state in the session storage
export const store = createStore<StoreModel>(persist({
    counter: counterModel,
    pokemon: pokemonModel,
  }));
  