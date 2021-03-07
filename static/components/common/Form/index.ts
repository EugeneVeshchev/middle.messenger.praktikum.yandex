import Block from "../../../utils/Block";
import compileTemplate from "../../../utils/compileTemplate";
import {template} from "./template";

export type FormProps = {
    className?: string;
    children?: string[]
}
export class Form extends Block<FormProps> {
    render() {
        return compileTemplate(template, this.props)
    }
}