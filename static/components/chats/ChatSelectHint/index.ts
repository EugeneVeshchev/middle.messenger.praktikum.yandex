import Block from "../../../modules/block/Block";
import compileTemplate from "../../../utils/compileTemplate";
import {template} from "./template";
import Heading from "../../common/Heading";

export class ChatSelectHint extends Block {

    get heading() {
        return new Heading({
            title: 'Выберите чат, чтобы начать общение',
            tagName: 'h3',
            className: 'chat-select-hint__text'
        }).render()
    }

    render() {
        const { heading } = this;
        return compileTemplate(template, {
            heading
        })
    }
}
