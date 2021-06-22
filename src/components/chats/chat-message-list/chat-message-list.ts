import {ChatMessage, ChatMessageProps} from "../chat-message";
import Block from "../../../utils/Block";
import compileTemplate from "../../../utils/compileTemplate";
import {chatMessageListTemplate} from "./chat-message-list.template";

import './chat-message-list.scss'

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
        const {messages} = this;
        return compileTemplate(chatMessageListTemplate, {
            messages
        })
    }
}
