import Block from "../../../modules/block/Block";
import compileTemplate from "../../../utils/compileTemplate";
import {template} from "./template";
import {Icon} from "../Icon";

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
        return compileTemplate(template, {
            ...this.props,
            icon
        });
    }
}
