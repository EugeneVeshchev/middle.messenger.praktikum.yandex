import Block from "../../../modules/block/Block";
import compileTemplate from "../../../utils/compileTemplate";
import {template} from "./template";
import {ChatHeader, ChatHeaderProps} from "../ChatHeader";
import {ChatMessageList, ChatMessageListProps} from "../ChatMessageList";
import {ChatNewMessage} from "../ChatNewMessage";

export type ChatProps = {
    name: ChatHeaderProps['name'];
    avatar: ChatHeaderProps['avatar'];
    messages: ChatMessageListProps['messages']
}
export class Chat extends Block<ChatProps> {
    get chatHeader() {
        const {name, avatar} = this.props;
        return new ChatHeader({
            name,
            avatar,
        }).render()
    }

    get chatMessagesList() {
        const {messages} =this.props;
        return new ChatMessageList({
            messages
        }).render()
    }

    get chatSendMessage() {
        return new ChatNewMessage().render()
    }

    render() {
        const {chatHeader, chatMessagesList, chatSendMessage} = this;
        return compileTemplate(template, {
            chatHeader,
            chatMessagesList,
            chatSendMessage
        })
    }
}
