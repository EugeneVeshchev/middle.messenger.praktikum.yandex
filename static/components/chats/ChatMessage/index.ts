import Block from "../../../utils/Block";
import compileTemplate from "../../../utils/compileTemplate";
import {template} from "./template";
import {TimeBadge} from "../../common/TimeBadge";

export type ChatMessageProps = {
    isSelf?: boolean;
    text?: string;
    image?: string;
    formattedTime?: string;
};

export class ChatMessage extends Block<ChatMessageProps> {

    get time() {
        const {formattedTime} = this.props

        return new TimeBadge({
            value: formattedTime
        }).render()
    }

    render() {
        const {time} = this;
        const {image, text, isSelf} = this.props;
        return compileTemplate(template, {
            image,
            text,
            isSelf,
            time,
        })
    }
}