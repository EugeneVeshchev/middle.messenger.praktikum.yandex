import Block from "../../../modules/block/Block";
import compileTemplate from "../../../utils/compileTemplate";
import {template} from "./template";

export type AvatarProps = {
    className?: string;
    src?: string;
    size?: 'large' | 'medium' | 'small';
    isClickable?: boolean;
}
export class Avatar extends Block<AvatarProps> {
    render() {
        return compileTemplate(template, this.props)
    }
}
