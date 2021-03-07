import Block from "../../../utils/Block";
import compileTemplate from "../../../utils/compileTemplate";
import {template} from "./template";
import {TextField} from "../../common/TextField";
import {Icon} from "../../common/Icon";
import {IconButton} from "../../common/IconButton";
import {ContextMenu} from "../../common/ContextMenu";

export class ChatNewMessage extends Block {

    get attaching() {
        return new IconButton({
            type: 'button',
            icon: new Icon({name: 'attach_file'}).render(),
            className: 'chat-new-message__send-button',
            child: new ContextMenu({
                className: 'chat-new-message__send-menu',
                items: [
                    {
                        icon: new Icon({
                            name: 'add_photo_alternate',
                            className: 'context-menu-item__icon',
                        }).render(),
                        title: ' Фото или видео'
                    },
                    {
                        icon: new Icon({
                            name: 'insert_drive_file',
                            className: 'context-menu-item__icon',
                        }).render(),
                        title: 'Файл'
                    },
                    {
                        icon: new Icon({
                            name: 'location_on',
                            className: 'context-menu-item__icon',
                        }).render(),
                        title: 'Локация'
                    },
                ]
            }).render()
        }).render()
    }

    get field() {
        return new TextField({
            id: 'message',
            name: 'message',
            autocomplete: 'off',
            placeholder: 'Ввидите сообщение',
            required: true,
            className: 'chat-new-message__send-field',
            variant: 'primary',
        }).render()
    }

    get action() {
        return new IconButton({
            icon: new Icon({name: 'send', }).render(),
            type: 'submit',
            variant: 'primary'
        }).render()
    }

    render() {
        const {attaching, field, action} = this;
        return compileTemplate(template, {
            attaching,
            field,
            action,
        })
    }
}