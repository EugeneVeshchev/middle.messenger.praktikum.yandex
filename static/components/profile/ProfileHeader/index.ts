import Block from "../../../utils/Block";
import compileTemplate from "../../../utils/compileTemplate";
import {template} from "./template";
import Link from "../../common/Link";
import {Icon} from "../../common/Icon";

export class ProfileHeader extends Block {

    get chatsLink() {
        return new Link({
            href: '/chats',
            title: 'Чаты',
            variant: 'primary',
            leftIcon: new Icon({
                name: 'keyboard_arrow_left'
            }).render()
        }).render()
    }
    get signOutLink() {
        return new Link({
            href: '/sign-in',
            title: 'Выйти',
            variant: 'error',
            rightIcon: new Icon({
                name: 'keyboard_arrow_right'
            }).render()
        }).render()
    }

    render() {
        const {chatsLink, signOutLink} = this;
        return compileTemplate(template, {
            chatsLink,
            signOutLink
        })
    }
}