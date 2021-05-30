import Block from "../../../modules/block/Block";
import { compileTemplate } from "../../../utils/compileTemplate";
import {template} from "./template";

type LinkProps = {
    href?: string;
    title: string;
    type?: string;
    className?: string;
    variant?: 'primary' | 'secondary' | 'error'
    rightIcon?: string;
    leftIcon?: string;
}
export default class Link extends Block<LinkProps> {
    render() {
        return compileTemplate(template, this.props)
    }
}
