import Route from "./Route";
import Block from "../block/Block";

export default class Router {
    static __instance: Router | null = null;

    private _currentRoute: Route | null = null;
    private _rootQuery: string = '';

    routes: Route[] = [];
    history: History = window.history;

    constructor(rootQuery: string = '') {
        if (Router.__instance) {
            return Router.__instance;
        }

        this.routes = [];
        this.history = window.history;
        this._currentRoute = null;
        this._rootQuery = rootQuery;

        Router.__instance = this;
    }

    use(pathname: string, block: new () => Block) {
        const route = new Route(pathname, block, {rootQuery: this._rootQuery});
        this.routes.push(route);
        return this;
    }

    start() {
        window.onpopstate = (event: PopStateEvent) => {
            const pathname = (event?.currentTarget as Window)?.location?.pathname
            this._onRoute(pathname);
        };

        this._onRoute(window.location.pathname);
    }

    private _onRoute(pathname: string) {
        const route = this.getRoute(pathname);

        if (!route) {
            return;
        }

        if (this._currentRoute) {
            this._currentRoute.leave();
        }

        this._currentRoute = route;
        route.render();
    }

    go(pathname: string) {
        this.history.pushState({}, "", pathname);
        this._onRoute(pathname);
    }

    back() {
        this.history.back()
    }

    forward() {
        this.history.forward();
    }

    getRoute(pathname: string) {
        return this.routes.find(route => route.match(pathname));
    }

    stop() {
        Router.__instance = null;
        this._currentRoute = null;
        this._rootQuery = '';
        this.routes = [];
    }
}
