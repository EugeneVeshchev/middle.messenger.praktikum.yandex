import Block from "../../../utils/Block";
import compileTemplate from "../../../utils/compileTemplate";
import {dialogHeaderTemplate} from "./dialog-header.template";

import './dialog-header.scss'
import Heading from "../heading";
import {Icon} from "../icon";
import {IconButton} from "../icon-button";

export type DialogHeaderProps = {
    className?: string;
    title?: string;
}

export class DialogHeader extends Block<DialogHeaderProps> {

    get heading() {
        const {title} = this.props;
        return new Heading({
            tagName: 'h2',
            className: 'heading_h1 heading_center',
            title,
        }).render()
    }

    get closeButton() {
        return new IconButton({
            className: 'dialog-header__close-btn',
            icon: new Icon({
                name: 'close'
            }).render(),
            type: 'button',
        }).render()
    }

    render() {
        const {heading, closeButton} = this;
        const {className} = this.props;
        return compileTemplate(dialogHeaderTemplate, {
            className,
            heading,
            closeButton
        })
    }
}
