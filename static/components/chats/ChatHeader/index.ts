import Block from "../../../modules/block/Block";
import { compileTemplate } from "../../../utils/compileTemplate";
import {template} from "./template";
import {Icon} from "../../common/Icon";
import Heading from "../../common/Heading";
import {Avatar} from "../../common/Avatar";
import {IconButton} from "../../common/IconButton";
import {ContextMenu} from "../../common/ContextMenu";

export type ChatHeaderProps = {
    name?: string
    avatar?: string
}
export class ChatHeader extends Block<ChatHeaderProps> {

    get avatar() {
        const { avatar } = this.props;

        return new Avatar({
            src: avatar,
        }).render()
    }

    get heading() {
        const {name} = this.props;
        return new Heading({
            tagName: 'h1',
            className: 'chat-header__chat-name',
            title: name,
        }).render()
    }

    get settings() {
        return new IconButton({
            className: 'chat-header__menu-button',
            icon: new Icon({
                name: 'more_vert'
            }).render(),
            child: new ContextMenu({
                className: 'chat-header__chat-menu',
                items: [
                    {
                        icon: new Icon({
                            name: 'add_circle_outline'
                        }).render(),
                        className: 'context-menu-item__icon',
                        title: 'Добавить пользователя'
                    },
                    {
                        icon: new Icon({
                            name: 'highlight_off'
                        }).render(),
                        className: 'context-menu-item__icon',
                        title: 'Удалить пользователя'
                    },
                ]
            }).render()
        }).render()
    }

    render() {
        const {avatar, heading, settings} = this;
        return compileTemplate(template, {
            avatar,
            heading,
            settings,
        })
    }
}
