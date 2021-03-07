import Block from "../../../utils/Block";
import compileTemplate from "../../../utils/compileTemplate";
import {template} from "./template";
import {ChatMessage, ChatMessageProps} from "../ChatMessage";

export type ChatMessageListProps = {
    messages: ChatMessageProps[]
}
export class ChatMessageList extends Block<ChatMessageListProps> {

    get messages() {
        const {messages} = this.props;
        return messages.map((message) => (
            new ChatMessage(message).render()
        ))
    }

    render() {
        const { messages } = this;
        return compileTemplate(template, {
            messages
        })
    }
}