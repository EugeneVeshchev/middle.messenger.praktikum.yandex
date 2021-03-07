import render from "../../utils/renderDom";
import Block from "../../utils/Block";
import compileTemplate from "../../utils/compileTemplate";
import Logotype from "../../components/common/Logotype/index";
import Heading from "../../components/common/Heading/index";
import Button from "../../components/common/Button/index";
import Link from "../../components/common/Link/index";
import {template} from "./template";
import {FormHelperMeta, getFormData} from "../../utils/FormHelper";
import {FormFields} from "../../components/common/FormFields";

type SignInModel = {
    login?: string;
    password?: string;
}

type SignInProps = FormHelperMeta<SignInModel>
class SignIn extends Block<SignInProps> {
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
        return compileTemplate(template, {
            actions,
            fields,
            heading,
            logotype
        })
    }
}

render(
    "#app",
    new SignIn()
)