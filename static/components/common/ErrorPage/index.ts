import Block from "../../../modules/block/Block";
import { compileTemplate } from "../../../utils/compileTemplate";
import Link from "../Link";
import Heading from "../Heading";
import {template} from "./template";

interface ErrorPageProps {
    className?: string;
    code: number
    message: string
}

export default class ErrorPage extends Block<ErrorPageProps> {
    get link() {
        return new Link({
            className: 'error-page__link',
            variant: 'primary',
            title: 'Вернуться к общению',
            href: '/'
        }).render()
    }

    get code() {
        return new Heading({
            tagName: "h2",
            title: this.props.code,
            className: 'heading_center error-page__code',
        }).render()
    }

    get message() {
        return new Heading({
            tagName: "h1",
            title: this.props.message,
            className: 'heading_center',
        }).render()
    }

    render() {
        const { className } = this.props;
        return compileTemplate(template, {
            className,
            code: this.code,
            message: this.message,
            link: this.link
        })
    }
}
