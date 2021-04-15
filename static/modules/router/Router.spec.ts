import {assert} from "chai";
import Router from "./Router";
import Block from "../block/Block";

describe('Test Router module', () => {
    function getPrivateCurrentRoutePathname(router: Router): NonNullable<Router['_currentRoute']>['_pathname'] | null {
        return (router as any)._currentRoute?._pathname;
    }

    function createRouter(rootQuery: string = 'body'): Router {
        return new Router(rootQuery)
    }

    beforeEach(() => {
        window.history.pushState({}, '', '/');
        createRouter().stop();
    })

    it('Router is singleton', () => {
        const singletonRouter = createRouter();
        const secondRouter = createRouter();

        assert.equal(singletonRouter, secondRouter);
    })

    it('Router history is equal window.history', () => {
        const router = createRouter();

        assert.equal(router.history, window.history);
    })

    it('Must add new route after call use', () => {
        const router = createRouter();

        const mockPath = '/';
        router.use(mockPath, Block);
        const lastRoute = router.routes[router.routes.length - 1];

        assert.isTrue(lastRoute.match(mockPath));
    })

    it('Get router return Route with same pathname', () => {
        const router = createRouter();
        const mockPath = '/';
        router.use(mockPath, Block);

        assert.isTrue(router.getRoute(mockPath)?.match(mockPath));
    })

    it('Redirect if pathname not include in routes when call go', () => {
        const router = createRouter();
        const initialPathname = window.location?.pathname;
        const redirectUrl = `/other`;

        router
            .use(initialPathname, Block)
            .start();

        router.go(redirectUrl);

        assert.equal(window.location.pathname, redirectUrl);
    })

    it('Redirect to pathname if exist in routes when call go', () => {
        const router = createRouter();
        const initialPathname = window.location?.pathname;
        const redirectUrl = `/other`;

        router
            .use(initialPathname, Block)
            .use(redirectUrl, Block)
            .start();

        router.go(redirectUrl);

        assert.equal(window.location.pathname, redirectUrl);
    })

    it('No change currentRoute if pathname not include in routes when call go', () => {
        const router = createRouter();
        const initialPathname = window.location?.pathname;
        const redirectUrl = `/other`;

        router
            .use(initialPathname, Block)
            .start();

        const currentRoutePath = getPrivateCurrentRoutePathname(router);

        router.go(redirectUrl);

        assert.equal(currentRoutePath, getPrivateCurrentRoutePathname(router));
    })

    it('Changed currentRoute if pathname exist in routes when call go', () => {
        const router = createRouter();
        const initialPathname = window.location?.pathname;

        const redirectUrl = `/other`;

        router
            .use(initialPathname, Block)
            .use(redirectUrl, Block)
            .start();

        const currentRoutePath = getPrivateCurrentRoutePathname(router);

        router.go(redirectUrl);

        assert.notEqual(currentRoutePath, getPrivateCurrentRoutePathname(router));
    })

    // Comment for reviewer:
    // Было бы круто почитать в комментах, какие кейсы можно/лучше/нужно проверить в данном случае
    // ( или во всех тестах проекта =) )

    // Еще круто было бы почитать по unit-тестам и DOM (history, document и т.д.),
    // возможно не до конца понимаю что/как тестировать правильно,
    // например, как в данном случае,
    // когда модуль использует в себе что-то с клиентской стороны
})
