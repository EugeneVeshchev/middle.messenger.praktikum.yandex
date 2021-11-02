import Block from '../../modules/block/Block';
import { ProfileInfo, ProfileInfoProps } from '../../components/profile/profile-info';
import { FormHelper } from '../../utils/FormHelper';
import { ProfileHeader } from '../../components/profile/profile-header';
import compileTemplate from '../../utils/compileTemplate';
import { profileTemplate } from './profile.template';
import { EMAIL_REG_EXP } from '../../constants';

import './profile.scss';
import { navigateTo } from '../../utils/navigateTo';

const mockUser = {
  email: 'test@test.test',
  login: 'UserLogin',
  first_name: 'UserName',
  second_name: 'UserSecondName',
  display_name: 'User',
  phone: '+7 (777) 777 77 77',
};

export type User = typeof mockUser;

export class Profile extends Block<ProfileInfoProps> {
  constructor() {
    const { events, values, errors } = new FormHelper({
      initialState: {
        values: mockUser,
      },
      selectors: {
        prefix: '.profile-page__change-profile',
      },
      validators: {
        email: (email) => {
          if (!email) {
            return 'Обязательное поле';
          }
          if (!EMAIL_REG_EXP.test(email)) {
            return 'Введите правильный email';
          }
        },
        login: (value) => {
          if (!value) {
            return 'Заполните обязательное поле';
          }
        },
      },
      onValidate: (newErrors) => {
        this.setProps({
          profile: {
            ...this.props.profile,
            errors: newErrors,
          },
        });
      },
      onSubmit: console.log,
    });
    super({
      isOpenPasswordDialog: false,
      isOpenAvatarDialog: false,

      isOpenProfileDialog: false,
      profile: {
        values,
        errors,
      },

      events: [
        {
          type: 'click',
          callback: () => {
            this.setProps({
              isOpenAvatarDialog: true,
            });
          },
          selectors: '.profile-page__avatar .avatar',
        },
        {
          type: 'click',
          callback: () => {
            this.setProps({
              isOpenAvatarDialog: false,
            });
          },
          selectors: '.profile-page__avatar .dialog-header__close-btn',
        },

        {
          type: 'click',
          callback: () => {
            this.setProps({
              isOpenProfileDialog: true,
            });
          },
          selectors: '.profile-page__change-profile > .button',
        },
        {
          type: 'click',
          callback: () => {
            this.setProps({
              isOpenProfileDialog: false,
            });
          },
          selectors: '.profile-page__change-profile .dialog-header__close-btn',
        },

        {
          type: 'click',
          callback: () => {
            this.setProps({
              isOpenPasswordDialog: true,
            });
          },
          selectors: '.profile-page__change-password > .button',
        },
        {
          type: 'click',
          callback: () => {
            this.setProps({
              isOpenPasswordDialog: false,
            });
          },
          selectors: '.profile-page__change-password .dialog-header__close-btn',
        },

        {
          type: 'click',
          callback: navigateTo('/chats'),
          selectors: '.chats-link',
        },

        {
          type: 'click',
          callback: navigateTo('/sign-in'),
          selectors: '.sign-out-link',
        },
        ...events,
      ],
    });
  }

  get profileHeader() {
    return new ProfileHeader().render();
  }

  get profileInfo() {
    const {
      profile,
      isOpenAvatarDialog,
      isOpenPasswordDialog,
      isOpenProfileDialog,
    } = this.props;
    return new ProfileInfo({
      profile,
      isOpenAvatarDialog,
      isOpenPasswordDialog,
      isOpenProfileDialog,
    }).render();
  }

  render() {
    const { profileHeader, profileInfo } = this;
    return compileTemplate(profileTemplate, {
      profileHeader,
      profileInfo,
    });
  }
}
