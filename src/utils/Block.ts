import EventBus from './EventBus';

interface Meta<TProps> {
  tagName: string;
  props: TProps;
}

export type EventModel = {
  type: keyof HTMLElementEventMap,
  callback: Parameters<Document['addEventListener']>[1]
  selectors: string;
};
type DefaultProps = {
  events?: EventModel[];
};

export default class Block<
  TInitProps extends object = {},
  TProps extends (TInitProps & DefaultProps) = TInitProps & DefaultProps,
> {
  static EVENTS = {
    INIT: 'init',
    FLOW_CDM: 'flow:component-did-mount',
    FLOW_CDU: 'flow:component-did-update',
    FLOW_RENDER: 'flow:render',
  };

  eventBus: () => EventBus;

  props: TProps;

  _meta: Meta<TProps>;

  constructor(props: TProps = {} as TProps, tagName = 'div') {
    const eventBus = new EventBus();
    this._meta = {
      tagName,
      props,
    };

    this.props = this._makePropsProxy(props);

    this.eventBus = () => eventBus;

    this._registerEvents(eventBus);
    eventBus.emit(Block.EVENTS.INIT);
  }

  _element: HTMLElement = HTMLElement.prototype;

  get element() {
    return this._element;
  }

  _registerEvents(eventBus: EventBus) {
    eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
    eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
  }

  _createResources() {
    const { tagName } = this._meta;
    this._element = this._createDocumentElement(tagName);
  }

  init() {
    this._createResources();
    this.eventBus().emit(Block.EVENTS.FLOW_CDM);
  }

  _componentDidMount() {
    this.componentDidMount(this.props);
    this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  componentDidMount(_props: TProps): void {
  }

  _componentDidUpdate(oldProps: TProps, newProps: TProps) {
    const response = this.componentDidUpdate(oldProps, newProps);
    if (response) {
      this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
    }
  }

  // т.к. в обязательных условиях стоит флаг , но функция дефолтная нужна
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  componentDidUpdate(_oldProps: TProps, _newProps: TProps) {
    return true;
  }

  setProps = (nextProps: Partial<TProps>) => {
    if (!nextProps) {
      return;
    }

    Object.assign(this.props, nextProps);
  };

  _removeEvents() {
    const { events = [] } = this.props;
    events.forEach(({ type, callback, selectors }) => {
      const elements = this._element.querySelectorAll(selectors);
      elements.forEach((element) => element.removeEventListener(type, callback));
    });
  }

  _addEvents() {
    const { events = [] } = this.props;
    events.forEach(({ type, callback, selectors }) => {
      const elements = this._element.querySelectorAll(selectors);
      elements.forEach((element) => element.addEventListener(type, callback));
    });
  }

  _render() {
    const block = this.render();

    this._removeEvents();

    this._element.innerHTML = block;

    this._addEvents();
  }

  render() {
    return '';
  }

  getContent() {
    return this.element;
  }

  _makePropsProxy(props: TProps) {
    const self = this;

    return new Proxy<TProps>(props, {
      set(target: any, name, value) {
        // eslint-disable-next-line no-param-reassign
        target[name] = value;
        self.eventBus().emit(Block.EVENTS.FLOW_CDU, self.props, target);
        return true;
      },
      deleteProperty() {
        throw new Error('нет доступа');
      },
    });
  }

  _createDocumentElement(tagName: string) {
    return document.createElement(tagName);
  }
}
