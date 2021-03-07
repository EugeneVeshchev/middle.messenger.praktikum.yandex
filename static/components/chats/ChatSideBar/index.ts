import Block from "../../../utils/Block";
import compileTemplate from "../../../utils/compileTemplate";
import {template} from "./template";
import {ChatPreviewList, ChatPreviewListProps} from "../ChatPreviewList";
import Link from "../../common/Link";
import {Icon} from "../../common/Icon";
import {TextField} from "../../common/TextField";
import {Avatar} from "../../common/Avatar";
import {ChatSearchingList} from "../ChatSearchingList";

export type ChatSideBarProps = {
    chats: ChatPreviewListProps['chats']
}
export class ChatSideBar extends Block<ChatSideBarProps> {

    get userAvatar() {
        return new Avatar({
            size: 'small'
        }).render()
    }

    get searchField() {
        return new TextField({
            id: 'search',
            name: 'search',
            placeholder: 'Поиск',
            required: true,
            variant: 'primary'
        }).render()
    }

    get profileLink() {
        return new Link({
            href: '/profile',
            variant: 'primary',
            title: 'Профиль',
            rightIcon: new Icon({
                className: 'link__icon link__icon_right',
                name: 'keyboard_arrow_right'
            }).render()
        }).render()
    }

    get chatPreviewList() {
        const { chats } = this.props;
        return new ChatPreviewList({
            chats
        }).render()
    }

    get chatSearchingList() {
        const { chats } = this.props;
        return new ChatSearchingList({
            chats
        }).render()
    }

    render() {
        const {userAvatar, searchField, profileLink, chatPreviewList, chatSearchingList} = this;
        return compileTemplate(template, {
            userAvatar,
            searchField,
            profileLink,
            chatPreviewList,
            chatSearchingList,
        })
    }
}