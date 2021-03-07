import Block from "../../../utils/Block";
import compileTemplate from "../../../utils/compileTemplate";
import {template} from "./template";

export type TextFieldProps = {
    id?: string;
    label?: string;
    variant?: 'primary' | 'error' | 'disabled'
    value?: string;
    placeholder?: string;
    type?: string;
    required?: boolean;
    name: string;
    className?: string;
    autocomplete?: string;
    hint?: string;
}
export class TextField extends Block<TextFieldProps> {
    render() {
        return compileTemplate(template, this.props)
    }
}