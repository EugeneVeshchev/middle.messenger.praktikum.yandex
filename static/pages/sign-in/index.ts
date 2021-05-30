import Block from "../../modules/block/Block";
import { compileTemplate } from "../../utils/compileTemplate";
import Logotype from "../../components/common/Logotype/index";
import Heading from "../../components/common/Heading/index";
import Button from "../../components/common/Button/index";
import Link from "../../components/common/Link/index";
import {template} from "./template";
import {FormHelperMeta, getFormData} from "../../utils/FormHelper";
import {FormFields} from "../../components/common/FormFields";
import Router from "../../modules/router/Router";

type SignInModel = {
    login?: string;
    password?: string;
}

type SignInProps = FormHelperMeta<SignInModel>
export class SignInPage extends Block<SignInProps> {
    constructor() {
        const signIn = getFormData<SignInModel>({
            initialValues: {},
            selector: '.sign-in-page',
            validating: {
                login: (value) => {
                    if (!value) {
                        return 'Заполните обязательное поле'
                    }
                },
                password: (value) => {
                    if (!value) {
                        return 'Заполните обязательное поле'
                    }
                }
            },
            onValidate: (errors) => {
                this.setProps({
                    errors,
                })
            },
            onSubmit: console.log
        })

        super({
            ...signIn,
            events: [
                ...signIn.events,
                {
                    selectors: '.sign-up-link',
                    type: 'click',
                    callback: (e) => {
                        e.preventDefault();
                        const router = new Router();
                        router.go('/sign-up/');
                    }
                },
                {
                    selectors: '.demo-link',
                    type: 'click',
                    callback: (e) => {
                        e.preventDefault();
                        const router = new Router();
                        router.go('/chats/');
                    }
                }
            ]
        });
    }

    get logotype() {
        return new Logotype().render()
    }
    get heading() {
        return new Heading({
            tagName: "h1",
            title: "Авторизация",
            className: "heading_center"
        }).render()
    }
    get fields() {
        const {errors} = this.props;
        return new FormFields({
            errors,
            values: [
                {
                    label: "Логин",
                    name: "login",
                    placeholder: "Введите логин",
                },
                {
                    label: "Пароль",
                    name: "password",
                    type: "password",
                    placeholder: "Введите пароль",
                }
            ]
        }).render()
    }
    get actions() {
        return [
            new Button({
                variant: "primary",
                title: "Авторизоваться",
                type: "submit",
            }).render(),
            new Link({
                title: "Нет аккаунта?",
                type: "button",
                className: 'sign-up-link',
            }).render(),
            new Link({
                title: "Демо версия",
                type: "button",
                className: 'demo-link',
            }).render()
        ]
    }

    render() {
        const {actions, fields, heading, logotype} = this;
        return compileTemplate(template, {
            actions,
            fields,
            heading,
            logotype
        })
    }
}
