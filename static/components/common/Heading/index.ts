import Block from "../../../modules/block/Block";
import compileTemplate from "../../../utils/compileTemplate";
import {template} from "./template";

type HeadingTagName = 'h1'| 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
export type HeadingProps = {
    tagName: HeadingTagName;
    className?: string;
    title?: string | number;
}
export default class Heading extends Block<HeadingProps> {
    render() {
        return compileTemplate(template, this.props)
    }
}
