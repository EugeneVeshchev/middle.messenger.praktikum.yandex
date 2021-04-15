import Block from "../../../modules/block/Block";
import compileTemplate from "../../../utils/compileTemplate";
import {template} from "./template";

export type DialogHeaderProps = {
    className?: string;
    child?: string;
}
export class DialogContent extends Block<DialogHeaderProps> {
    render() {
        return compileTemplate(template, this.props)
    }
}
