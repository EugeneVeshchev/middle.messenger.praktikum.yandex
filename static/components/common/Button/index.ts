import Block from "../../../utils/Block";
import compileTemplate from "../../../utils/compileTemplate";
import {template} from "./template";

type ButtonProps = {
    title: string;
    variant?: 'primary' | 'secondary' | 'transparent'
    type?: string;
    className?: string;
}
export default class Button extends Block<ButtonProps> {
    render() {
        return compileTemplate(template, this.props)
    }
}