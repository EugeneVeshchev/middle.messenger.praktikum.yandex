import Block from "../../../utils/Block";
import compileTemplate from "../../../utils/compileTemplate";
import {template} from "./template";
import {ChatPreview, ChatPreviewProps} from "../ChatPreview";

export type ChatSearchingListProps = {
    className?: string;
    chats: ChatPreviewProps[]
}
export class ChatSearchingList extends Block<ChatSearchingListProps> {

    get chats() {
        const { chats } = this.props;
        return chats.map((chat) => (
            new ChatPreview({
                ...chat,
                variant: "small",
            }).render()
        ))
    }

    render() {
        const {chats} = this;
        return compileTemplate(template, {
            chats
        })
    }
}