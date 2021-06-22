import Block from "../../../utils/Block";
import compileTemplate from "../../../utils/compileTemplate";
import {contextMenuTemplate} from "./context-menu.template";

import './context-menu.scss'
import {ContextMenuItem, ContextMenuItemProps} from "../context-menu-item";

export type ContextMenuProps = {
    className?: string;
    items: ContextMenuItemProps[]
}

export class ContextMenu extends Block<ContextMenuProps> {

    get items() {
        const {items = []} = this.props;
        return items.map(item => (
            new ContextMenuItem(item).render()
        ))
    }

    render() {
        const {items} = this;
        const {className} = this.props;
        return compileTemplate(contextMenuTemplate, {
            items,
            className
        })
    }
}
