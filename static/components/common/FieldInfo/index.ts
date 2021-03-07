import Block from "../../../utils/Block";
import compileTemplate from "../../../utils/compileTemplate";
import {template} from "./template";

export type FieldInfoProps = {
    className?: string;
    label?: string;
    value?: string;
}
export class FieldInfo extends Block<FieldInfoProps> {
    render() {
        return compileTemplate(template, this.props)
    }
}