import Block from "../../../modules/block/Block";
import {ContextMenuItem, ContextMenuItemProps} from "../ContextMenuItem";
import { compileTemplate } from "../../../utils/compileTemplate";
import {template} from "./template";

export type ContextMenuProps = {
    className?: string;
    items: ContextMenuItemProps[]
}
export class ContextMenu extends Block<ContextMenuProps> {

    get items() {
        const { items = [] } = this.props;
        return items.map(item => (
            new ContextMenuItem(item).render()
        ))
    }

    render() {
        const { items } = this;
        const { className } = this.props;
        return compileTemplate(template, {
            items,
            className
        })
    }
}
