import EventBus from '../../utils/EventBus';

export type State = Record<string, any>;
export type Mutation<
  TState extends State> = Record<string,
  <TPayload>(state: TState, payload: TPayload) => TState
  >;

export class Store<
  TState extends State,
  TMutations extends Mutation<TState>,
  > {
  static EVENTS = {
    DISPATCH: 'DISPATCH',
  };

  eventBus: EventBus;

  mutations: TMutations;

  private status: 'resting' | 'mutation' = 'resting';

  private _state: TState;

  get state() {
    return this._state;
  }

  constructor(mutations: TMutations, state: TState) {
    this.eventBus = new EventBus();

    this.mutations = mutations;
    this._state = this._makeProxyState(state);

    // this.actions = this._registerEvents(eventBus);
  }

  subscribe<TCallback extends Function>(callback: TCallback) {
    this.eventBus.on(Store.EVENTS.DISPATCH, callback);
  }

  dispatch<TPayload>(type: string, payload: TPayload) {
    if (!this.mutations[type]) {
      console.warn(`Mutation "${type}" doesn't exist.`);
    }

    this.mutations[type](this.state, payload);
    this.status = 'mutation';
    Object.assign(this._state, this._state);
  }

  private _makeProxyState(state: TState) {
    return new Proxy<TState>(state, {
      set: (target: TState, name: keyof TState & string, value: any) => {
        // eslint-disable-next-line no-param-reassign
        target[name] = value;
        this.eventBus.emit(Store.EVENTS.DISPATCH, this.state, target);

        if (this.status !== 'mutation') {
          console.warn(`You should use a mutation to set ${name}`);
        }

        this.status = 'resting';

        return true;
      },
    });
  }
}
