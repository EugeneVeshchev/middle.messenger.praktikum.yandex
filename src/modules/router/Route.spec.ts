import { assert } from 'chai';
import Route from './Route';
import Block from '../block/Block';

describe('Test Route module', () => {
  function createRoute(pathname: string = '/'): Route {
    return new Route(pathname, Block, { rootQuery: 'body' });
  }

  it('Route block before first render must be null', () => {
    const route = createRoute();

    assert.isNull((route as any)._block);
  });

  it('Route must have block after render', () => {
    const route = createRoute();
    route.render();
    assert.isNotNull((route as any)._block);
  });

  it('Route must have block after leave', () => {
    const route = createRoute();
    route.render();
    route.leave();
    assert.isNotNull((route as any)._block);
  });

  it('Route match must return true when pathnames is equals', () => {
    const mockPath = '/';
    const route = createRoute(mockPath);

    assert.isTrue(route.match(mockPath));
  });

  it('Route match must return false when pathnames is not equals', () => {
    const mockPath = '/';
    const route = createRoute(mockPath);

    assert.isFalse(route.match(`${mockPath}Other`));
  });
});
