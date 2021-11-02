import { Mutation, State, Store } from './Store';
import { connect } from './connect';

export const createStore = <TState extends State, TMutations extends Mutation<TState>>(
  initialState: TState,
  mutations: TMutations,
) => {
  const store = new Store(mutations, initialState);

  return {
    store,
    connect: connect(store),
  };
};
