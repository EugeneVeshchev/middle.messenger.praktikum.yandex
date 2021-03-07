import Block from "../../../utils/Block";
import compileTemplate from "../../../utils/compileTemplate";
import {template} from "./template";

export type DialogProps = {
    isOpen?: boolean;
    className?: string;
    child?: string;
}
export class Dialog extends Block<DialogProps> {
    render() {
        return compileTemplate(template, this.props)
    }
}