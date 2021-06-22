import Block from "../../../utils/Block";
import compileTemplate from "../../../utils/compileTemplate";
import {formFieldsTemplate} from "./form-fields.template";

import './form-fields.scss'
import {TextField, TextFieldProps} from "../text-field";

export type FormFieldsProps = {
    className?: string;
    errors?: Record<string, string>;
    values?: TextFieldProps[]
}

export class FormFields extends Block<FormFieldsProps> {

    get fields() {
        const {values = [], errors} = this.props;
        return values.map(({name, variant = 'primary', ...textField}) => {
            const hint = name && errors && errors[name];

            return new TextField({
                ...textField,
                variant: hint ? 'error' : variant,
                name,
                hint,
            }).render()
        })
    }

    render() {
        const {fields} = this;
        return compileTemplate(formFieldsTemplate, {
            fields
        })
    }
}
