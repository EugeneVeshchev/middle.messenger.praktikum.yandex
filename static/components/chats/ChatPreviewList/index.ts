import Block from "../../../modules/block/Block";
import { compileTemplate } from "../../../utils/compileTemplate";
import {template} from "./template";
import {ChatPreview, ChatPreviewProps} from "../ChatPreview";

export type ChatPreviewListProps = {
    chats: ChatPreviewProps[]
}
export class ChatPreviewList extends Block<ChatPreviewListProps> {

    get chats() {
        const { chats } = this.props;
        return chats.map((chat) => (
            new ChatPreview(chat).render()
        ))
    }

    render() {
        const {chats} = this;
        return compileTemplate(template, {
            chats
        })
    }
}
