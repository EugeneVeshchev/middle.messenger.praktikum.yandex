import Block from "../../../modules/block/Block";
import compileTemplate from "../../../utils/compileTemplate";
import {template} from "./template";

export type BadgeProps = {
    className?: string;
    variant?: 'primary' | 'secondary' | 'error'
    value?: string | number;
}
export class Badge extends Block<BadgeProps> {
    render() {
        return compileTemplate(template, this.props)
    }
}
