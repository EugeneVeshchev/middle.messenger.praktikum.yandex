import Block from '../../utils/Block';
import { FormHelper, FormHelperData } from '../../utils/FormHelper';
import Logotype from '../../components/common/logotype';
import Heading from '../../components/common/heading';
import { FormFields } from '../../components/common/form-fields';
import Button from '../../components/common/button';
import Link from '../../components/common/link';
import compileTemplate from '../../utils/compileTemplate';
import { signInTemplate } from './sign-in.template';

import './sign-in.scss';

type SignInModel = {
  login?: string;
  password?: string;
};
type SignInProps = FormHelperData<SignInModel>;

export class SignIn extends Block<SignInProps> {
  constructor() {
    const { values, errors, events } = new FormHelper({
      initialState: {
        values: {
          login: '',
          password: '',
        },
      },
      selectors: {
        prefix: '.sign-in-page',
      },
      validators: {
        login: (value) => {
          if (!value) {
            return 'Заполните обязательное поле';
          }
        },
        password: (value) => {
          if (!value) {
            return 'Заполните обязательное поле';
          }
        },
      },
      onValidate: (newErrors) => {
        this.setProps({
          errors: newErrors,
        });
      },
      onSubmit: console.log,
    });

    super({ values, errors, events });
  }

  get logotype() {
    return new Logotype().render();
  }

  get heading() {
    return new Heading({
      tagName: 'h1',
      title: 'Авторизация',
      className: 'heading_center',
    }).render();
  }

  get fields() {
    const { errors, values } = this.props;
    return new FormFields({
      errors,
      values: [
        {
          name: 'login',
          value: values.login,
          label: 'Логин',
          placeholder: 'Введите логин',
        },
        {
          name: 'password',
          value: values.password,
          label: 'Пароль',
          type: 'password',
          placeholder: 'Введите пароль',
        },
      ],
    }).render();
  }

  get actions() {
    return [
      new Button({
        variant: 'primary',
        title: 'Авторизоваться',
        type: 'submit',
      }).render(),
      new Link({
        href: '/sign-up',
        title: 'Нет аккаунта?',
        type: 'button',
      }).render(),
      new Link({
        href: '/chats',
        title: 'Демо версия',
        type: 'button',
      }).render(),
    ];
  }

  render() {
    const {
      actions, fields, heading, logotype,
    } = this;
    return compileTemplate(signInTemplate, {
      actions,
      fields,
      heading,
      logotype,
    });
  }
}
