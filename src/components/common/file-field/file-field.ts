import Block from "../../../utils/Block";
import compileTemplate from "../../../utils/compileTemplate";
import {fileFieldTemplate} from "./file-field.template";

import './file-field.scss'
import {Icon} from "../icon";

export type FileFieldProps = {
    id: string;
    label?: string;
    accept?: string;
    required?: boolean;
    name?: string;
    className?: string;
}

export class FileField extends Block<FileFieldProps> {

    get icon() {
        return new Icon({
            name: 'attach_file'
        }).render()
    }

    render() {
        const {icon} = this;
        return compileTemplate(fileFieldTemplate, {
            ...this.props,
            icon
        });
    }
}
