import Block from "../../../utils/Block";
import compileTemplate from "../../../utils/compileTemplate";
import {template} from "./template";

export type ContextMenuItemProps = {
    icon?: string;
    className?: string;
    title?: string;
}
export class ContextMenuItem extends Block<ContextMenuItemProps> {
    render() {
        return compileTemplate(template, this.props)
    }
}