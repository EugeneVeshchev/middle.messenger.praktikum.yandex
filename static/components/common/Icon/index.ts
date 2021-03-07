import Block from "../../../utils/Block";
import compileTemplate from "../../../utils/compileTemplate";
import {template} from "./template";

export type IconProps = {
    className?: string;
    name?: string;
}
export class Icon extends Block<IconProps> {
    render() {
        return compileTemplate(template, this.props)
    }
}