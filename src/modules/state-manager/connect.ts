import Block from '../block/Block';
import { Mutation, State, Store } from './Store';

export const connect = <TState extends State, TMutations extends Mutation<TState>>(
  store: Store<TState, TMutations>,
) => <TConnectProps extends object>(
    mapStoreToProps: (store: Store<TState, TMutations>['state']) => TConnectProps,
  ) => <TProps extends object>(
      Component: Block<TProps>,
    ) => (class ConnectComponent extends Block<TConnectProps & TProps> {
        constructor(props: TProps) {
          super({
            ...mapStoreToProps(store.state),
            ...props,
          });
          console.log('connect', this.props);
          store.subscribe(this.setStoreProps.bind(this));
        }

        setStoreProps(newState: Store<TState, TMutations>['state']) {
          const newProps = mapStoreToProps(newState);
          this.setProps({
            ...this.props,
            ...newProps,
          });
        }

        render(): string {
          return (new Component(this.props).render());
        }
      });
