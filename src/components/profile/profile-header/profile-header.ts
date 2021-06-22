import Block from "../../../utils/Block";
import Link from "../../common/link";
import {Icon} from "../../common/icon";
import compileTemplate from "../../../utils/compileTemplate";
import {profileHeaderTemplate} from "./profile-header.template";

import './profile-header.scss'

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
        return compileTemplate(profileHeaderTemplate, {
            chatsLink,
            signOutLink
        })
    }
}
