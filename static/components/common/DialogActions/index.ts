import Block from "../../../utils/Block";
import compileTemplate from "../../../utils/compileTemplate";
import {template} from "./template";

export type DialogHeaderProps = {
    className?: string;
    child?: string;
}
export class DialogActions extends Block<DialogHeaderProps> {
    render() {
        return compileTemplate(template, this.props)
    }
}