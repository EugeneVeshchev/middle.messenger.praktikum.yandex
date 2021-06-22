import Block from "../../utils/Block";
import {FormHelperMeta, getFormData} from "../../utils/FormHelper";
import Logotype from "../../components/common/logotype";
import Heading from "../../components/common/heading";
import {FormFields} from "../../components/common/form-fields";
import Button from "../../components/common/button";
import Link from "../../components/common/link";
import compileTemplate from "../../utils/compileTemplate";
import {signInTemplate} from "./sign-in.template";

import './sign-in.scss'

type SignInModel = {
    login?: string;
    password?: string;
}
type SignInProps = FormHelperMeta<SignInModel>

export class SignIn extends Block<SignInProps> {
    constructor() {
        const signIn = getFormData<SignInModel>({
            initialValues: {},
            selector: '.sign-in-page',
            validating: {
                login: (value) => {
                    if (!value) {
                        return 'Заполните обязатлеьное поле'
                    }
                },
                password: (value) => {
                    if (!value) {
                        return 'Заполните обязатлеьное поле'
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

        super(signIn);
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
                href: "/sign-up",
                title: "Нет аккаунта?",
                type: "button",
            }).render(),
            new Link({
                href: "/chats",
                title: "Демо версия",
                type: "button",
            }).render()
        ]
    }

    render() {
        const {actions, fields, heading, logotype} = this;
        return compileTemplate(signInTemplate, {
            actions,
            fields,
            heading,
            logotype
        })
    }
}
