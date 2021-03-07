import Block from "../../../utils/Block";
import compileTemplate from "../../../utils/compileTemplate";
import {template} from "./template";

export type TimeBadgeProps = {
    className?: string;
    value?: string | number;
}
export class TimeBadge extends Block<TimeBadgeProps> {
    render() {
        return compileTemplate(template, this.props)
    }
}