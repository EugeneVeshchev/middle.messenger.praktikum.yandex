export class EventDelegator {
  static DATA_EVENT_DELEGATION_ATTRIBUTE_NAME = 'data-event-delegation-id';

  private static _getEventDelegationTarget(target: HTMLElement) {
    return target.closest(`[${EventDelegator.DATA_EVENT_DELEGATION_ATTRIBUTE_NAME}]`) as HTMLElement
  }

  static generateEventDelegationId() {
    return Math.random();
  }

  private _callbacksByEventsAndElements = {} as Record<keyof DocumentEventMap, Map<string, any>>;
  private _root: HTMLElement

  constructor(root: HTMLElement) {

    if (!root) {
      throw new Error('root element must be defined')
    }
    this._root = root;
    this._handleEvent = this._handleEvent.bind(this)
  }

  _initEventType<TEventType extends keyof DocumentEventMap>(eventType: TEventType) {
    if (!this._callbacksByEventsAndElements[eventType]) {
      this._callbacksByEventsAndElements[eventType] = new Map();
      this._root.addEventListener(eventType, this._handleEvent)
    }
  }

  setEvent<TEventType extends keyof DocumentEventMap, TCallback>(id: string, eventType: TEventType, callback: TCallback) {
    this._initEventType(eventType);

    const events = this._callbacksByEventsAndElements[eventType];
    events.set(id, callback)
  }

  deleteEvent<TEventType extends keyof DocumentEventMap>(id: string, eventType: TEventType) {
    const events = this._callbacksByEventsAndElements[eventType];
    events.delete(id);
    if (!events.size) {
      this._root.removeEventListener(eventType, this._handleEvent)
    }
  }

  _handleEvent(event: Event) {
    const eventType = event.type as keyof DocumentEventMap;
    if (!(eventType in this._callbacksByEventsAndElements)) {
      return
    }
    const eventsByIds = this._callbacksByEventsAndElements[eventType];

    let eventTarget: HTMLElement | null = event.target as HTMLElement;
    while(!!eventTarget && !event.cancelBubble) {
      const target = EventDelegator._getEventDelegationTarget(eventTarget);
      if (target) {
        const id = target.getAttribute(EventDelegator.DATA_EVENT_DELEGATION_ATTRIBUTE_NAME) as string;
        const callback = eventsByIds.get(id)
        if (typeof callback === 'function') {
          callback(event)
        }
      }
      eventTarget = target?.parentElement;
    }
  }
}
