import * as components from "../components";
import {EventDelegator} from "./EventDelegator";
import Block from "../modules/block/Block";
import { HelperOptions } from "handlebars";

Handlebars.registerHelper('component', (Component: typeof Block, options: HelperOptions) => {
  console.log('op', options)
  const component = new Component(options.hash);
  const result = component.getContent()

  return new Handlebars.SafeString(result);
});

Object.entries(components).forEach(([key, component]) => {
  Handlebars.registerHelper(key, (options) => {
    options.data.name = key
    // (component.prototype as any).name = key
    return component
  })
})

Handlebars.registerHelper('event', <TEvent extends Event>(
  eventType: keyof DocumentEventMap,
  callback: (event: TEvent) => void,
  options: HelperOptions
) => {
  const id = EventDelegator.generateEventDelegationId();
  const eventDelegator = options.data.eventDelegator;
  eventDelegator.setEvent(String(id), eventType, callback)
  return new Handlebars.SafeString(`${EventDelegator.DATA_EVENT_DELEGATION_ATTRIBUTE_NAME}="${id}"`)
});

const eventDelegator = new EventDelegator(document.getElementById('app') as HTMLElement);
export default function compileTemplate<TProps>(
  template: string,
  props: TProps = {} as TProps,
): string {
  const compile = Handlebars.compile(template);
  return compile(props, {
    data: {
      eventDelegator
    },
  });
}
