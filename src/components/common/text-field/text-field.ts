import Block from "../../../utils/Block";
import compileTemplate from "../../../utils/compileTemplate";
import {textFieldTemplate} from "./text-field.template";

import './text-field.scss'

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
        return compileTemplate(textFieldTemplate, this.props)
    }
}
