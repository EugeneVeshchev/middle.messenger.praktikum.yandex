import Block from '../../utils/Block';
import { FormHelper, FormHelperData } from '../../utils/FormHelper';
import Logotype from '../../components/common/logotype';
import Heading from '../../components/common/heading';
import { FormFields } from '../../components/common/form-fields';
import Button from '../../components/common/button';
import Link from '../../components/common/link';
import compileTemplate from '../../utils/compileTemplate';
import { signUpTemplate } from './sign-up.template';

import './sign-up.scss';
import { EMAIL_REG_EXP } from '../../constants';

type SignUpModel = {
  email?: string;
  login?: string;
  first_name?: string;
  second_name?: string;
  phone?: string;
  password?: string;
  repeat_password?: string;
};

export class SignUp extends Block<FormHelperData<SignUpModel>> {
  constructor() {
    const { values, errors, events } = new FormHelper({
      initialState: {
        values: {
          email: '',
          login: '',
          first_name: '',
          second_name: '',
          phone: '',
          password: '',
          repeat_password: '',
        },
      },
      selectors: {
        prefix: '.sign-up-page',
      },
      validators: {
        email: (email) => {
          if (!email) {
            return 'Заполните обязательное поле';
          }
          if (!EMAIL_REG_EXP.test(email)) {
            return 'Введите валидный email';
          }
        },
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
        repeat_password: (value, allValues) => {
          const { password } = allValues;
          if (!value && password) {
            return 'Заполните обязательное поле';
          }
          if (value !== password) {
            return 'Пароли должны совпадать';
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
      title: 'Регистрация',
      className: 'heading_center',
    }).render();
  }

  get fields() {
    const { errors, values } = this.props;
    return new FormFields({
      errors,
      values: [
        {
          label: 'Почта',
          name: 'email',
          placeholder: 'Почта',
          value: values.email,
        },
        {
          label: 'Логин',
          name: 'login',
          placeholder: 'Введите логин',
          value: values.login,
        },
        {
          label: 'Имя',
          name: 'first_name',
          placeholder: 'Имя',
          value: values.first_name,
        },
        {
          label: 'Фамилия',
          name: 'second_name',
          placeholder: 'Фамилия',
          value: values.second_name,
        },
        {
          label: 'Телефон',
          name: 'phone',
          placeholder: 'Введите телефон',
          value: values.phone,
        },
        {
          label: 'Пароль',
          name: 'password',
          placeholder: 'Введите пароль',
          type: 'password',
          value: values.password,
        },
        {
          label: 'Повторите пароль',
          name: 'repeat_password',
          placeholder: 'Повторите пароль',
          type: 'password',
          value: values.repeat_password,
        },
      ],
    }).render();
  }

  get actions() {
    return [
      new Button({
        variant: 'primary',
        title: 'Зарегестрироваться',
        type: 'submit',
      }).render(),
      new Link({
        href: '/sign-in',
        title: 'Войти',
        type: 'button',
      }).render(),
    ];
  }

  render() {
    const {
      logotype, heading, fields, actions,
    } = this;
    return compileTemplate(signUpTemplate, {
      logotype,
      heading,
      fields,
      actions,
    });
  }
}
