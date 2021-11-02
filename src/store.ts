import { createStore } from './modules/state-manager/createStore';

const { store, connect } = createStore({ test: 1 } as { test: number }, {
  increment: (state, payload: number = 1) => {
    state.test += payload;
    return state;
  },
});

setTimeout(() => {
  store.dispatch('increment', 2);
}, 3000);

export { store, connect };
