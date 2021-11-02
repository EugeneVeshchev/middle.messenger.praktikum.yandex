declare module 'Handlebars' {
  import * as Handlebars from 'handlebars';

  const Handlebars: Handlebars;
  export default Handlebars;
}

export type PlainObject<T = unknown> = {
  [k in string]: T;
};
