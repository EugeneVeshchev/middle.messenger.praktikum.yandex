import Block from "../../../utils/Block";
import compileTemplate from "../../../utils/compileTemplate";
import {chatMessageTemplate} from "./chat-message.template";

import './chat-message.scss'
import {TimeBadge} from "../../common/time-badge";

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
        return compileTemplate(chatMessageTemplate, {
            image,
            text,
            isSelf,
            time,
        })
    }
}
