import Block from "../../modules/block/Block";
import { compileTemplate } from "../../utils/compileTemplate";
import Logotype from "../../components/common/Logotype";
import Heading from "../../components/common/Heading";
import Button from "../../components/common/Button";
import Link from "../../components/common/Link";
import {template} from "./template";
import {FormHelperMeta, getFormData} from "../../utils/FormHelper";
import {FormFields} from "../../components/common/FormFields";
import Router from "../../modules/router/Router";
import {EMAIL_REGEXP} from "../../constants";

type SignUpModel = {
    email?: string;
    login?: string;
    first_name?: string;
    second_name?: string;
    phone?: string;
    password?: string;
    repeat_password?: string;
}
export class SignUpPage extends Block<FormHelperMeta<SignUpModel>> {

    constructor() {
        const signUn = getFormData<SignUpModel>({
            initialValues: {},
            selector: '.sign-up-page',
            validating: {
                email: (email) => {
                    if (!email) {
                        return 'Заполните обязательное поле'
                    }
                    if (!EMAIL_REGEXP.test(email)) {
                        return 'Введите валидный email'
                    }
                },
                login: (value) => {
                    if (!value) {
                        return 'Заполните обязатлеьное поле'
                    }
                },
                password: (value) => {
                    if (!value) {
                        return 'Заполните обязатлеьное поле'
                    }
                },
                repeat_password: (value, values) => {
                    const password = values.password;
                    if (!value && password) {
                        return 'Заполните обязатлеьное поле'
                    }
                    if (value !== password) {
                        return 'Пароли должны совпадать'
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
            ...signUn,
            events: [
                ...signUn.events,
                {
                    selectors: '.sign-in-link',
                    type: 'click',
                    callback: (e) => {
                        e.preventDefault();
                        const router = new Router();
                        router.go('/sign-in/')
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
            title: "Регистрация",
            className: "heading_center"
        }).render()
    }

    get fields() {
        const {errors} = this.props;
        return new FormFields({
          errors,
          values: [
              {
                  label: "Почта",
                  name: "email",
                  placeholder: "Почта",
              },
              {
                  label: "Логин",
                  name: "login",
                  placeholder: "Введите логин",
              },
              {
                  label: "Имя",
                  name: "first_name",
                  placeholder: "Имя",
              },
              {
                  label: "Фамилия",
                  name: "second_name",
                  placeholder: "Фамилия",
              },
              {
                  label: "Телефон",
                  name: "phone",
                  placeholder: "Введите телефон",
              },
              {
                  label: "Пароль",
                  name: "password",
                  placeholder: "Введите пароль",
                  type: 'password'
              },
              {
                  label: "Повторите пароль",
                  name: "repeat_password",
                  placeholder: "Повторите пароль",
                  type: 'password'
              },
          ]
        }).render()
    }

    get actions() {
        return [
            new Button({
                variant: "primary",
                title: "Зарегестрироваться",
                type: "submit",
            }).render(),
            new Link({
                title: "Войти",
                type: "button",
                className: 'sign-in-link'
            }).render(),
        ]
    }

    render() {
        const {logotype, heading, fields, actions} = this;
        return compileTemplate(template, {
            logotype,
            heading,
            fields,
            actions,
        })
    }
}
