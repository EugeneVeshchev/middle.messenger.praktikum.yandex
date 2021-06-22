import {ChatPreview, ChatPreviewProps} from "../chat-preview/chat-preview";
import Block from "../../../utils/Block";
import compileTemplate from "../../../utils/compileTemplate";
import {chatSearchingListTemplate} from "./chat-searching-list.template";

export type ChatSearchingListProps = {
    className?: string;
    chats: ChatPreviewProps[]
}

export class ChatSearchingList extends Block<ChatSearchingListProps> {

    get chats() {
        const {chats} = this.props;
        return chats.map((chat) => (
            new ChatPreview({
                ...chat,
                variant: "small",
            }).render()
        ))
    }

    render() {
        const {chats} = this;
        return compileTemplate(chatSearchingListTemplate, {
            chats
        })
    }
}
