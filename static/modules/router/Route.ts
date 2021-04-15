import Block from "../block/Block";
import render from "../../utils/renderDom";

type RouteProps = {
    rootQuery: string;
}

export function isEqual(lhs: string, rhs: string) {
    return lhs === rhs;
}

export default class Route {
    private _pathname: string;
    private readonly _blockClass: new () => Block;
    private _block: Block | null;
    private _props: RouteProps;

    constructor(pathname: string, view: new () => Block, props: RouteProps) {
        this._pathname = pathname;
        this._blockClass = view;
        this._block = null;
        this._props = props;
    }

    navigate(pathname: string) {
        if (this.match(pathname)) {
            this._pathname = pathname;
            this.render();
        }
    }

    leave() {
        if (this._block) {
            this._block.hide();
        }
    }

    match(pathname: string) {
        return isEqual(pathname, this._pathname);
    }

    render() {
        if (!this._block) {
            this._block = new this._blockClass();
            render(this._props.rootQuery, this._block);
            return;
        }

        this._block.show();
    }
}
