import { action, thunk } from 'easy-peasy';
import { CounterModel } from './models';

export const counterModel: CounterModel = {
    data: {
      counter: 0,
    },
    add: action((state, payload) => {
      state.data.counter += payload;
    }),
    subtract: action((state, payload) => {
      state.data.counter -= payload;
    }),
    customOperation: thunk((actions, payload) => {
        actions.add(payload) // basically thunk is smt that can call an action 
    })
  }