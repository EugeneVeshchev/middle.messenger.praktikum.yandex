import Block from "../../../utils/Block";
import compileTemplate from "../../../utils/compileTemplate";
import {template} from "./template";

export type IconButtonProps = {
    variant?: 'primary' | 'secondary' | 'disabled'
    icon?: string
    child?: string
    type?: string
    className?: string
}
export class IconButton extends Block<IconButtonProps> {
    render() {
        return compileTemplate(template, this.props)
    }
}