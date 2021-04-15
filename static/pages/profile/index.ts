import Block from "../../modules/block/Block";
import compileTemplate from "../../utils/compileTemplate";
import {ProfileHeader} from "../../components/profile/ProfileHeader";
import {ProfileInfo, ProfileInfoProps} from "../../components/profile/ProfileInfo";
import {template} from "./template";
import {emailRegExp, getFormData} from "../../utils/FormHelper";
import Router from "../../modules/router/Router";

const mockUser = {
    email: 'test@test.test',
    login: 'UserLogin',
    first_name: 'UserName',
    second_name: 'UserSecondName',
    display_name: 'User',
    phone: '+7 (777) 777 77 77',
}
export type User = typeof mockUser;

export class ProfilePage extends Block<ProfileInfoProps> {
    constructor() {
        const {events, ...profile} = getFormData({
            initialValues: mockUser,
            selector: '.profile-page__change-profile',
            validating: {
                email: (email) => {
                    if (!email) {
                        return 'Обязательное поле'
                    }
                    if (!emailRegExp.test(email)) {
                        return 'Введите валидный email'
                    }
                }
            },
            onValidate: (errors) => {
                this.setProps({
                    profile: {
                        ...this.props.profile,
                        errors
                    }
                })
            },
            onSubmit: console.log
        });

        super({
            isOpenPasswordDialog: false,
            isOpenAvatarDialog: false,

            isOpenProfileDialog: false,
            profile,

            events: [
                {
                    type: 'click',
                    callback: () => {
                        this.setProps({
                            isOpenAvatarDialog: true,
                        })
                    },
                    selectors: '.profile-page__avatar .avatar'
                },
                {
                    type: 'click',
                    callback: () => {
                        this.setProps({
                            isOpenAvatarDialog: false,
                        })
                    },
                    selectors: '.profile-page__avatar .dialog-header__close-btn'
                },

                {
                    type: 'click',
                    callback: () => {
                        this.setProps({
                            isOpenProfileDialog: true,
                        })
                    },
                    selectors: '.profile-page__change-profile .button'
                },
                {
                    type: 'click',
                    callback: () => {
                        this.setProps({
                            isOpenProfileDialog: false,
                        })
                    },
                    selectors: '.profile-page__change-profile .dialog-header__close-btn'
                },

                {
                    type: 'click',
                    callback: () => {
                        this.setProps({
                            isOpenPasswordDialog: true,
                        })
                    },
                    selectors: '.profile-page__change-password .button'
                },
                {
                    type: 'click',
                    callback: () => {
                        this.setProps({
                            isOpenPasswordDialog: false,
                        })
                    },
                    selectors: '.profile-page__change-password .dialog-header__close-btn'
                },
                {
                    type: 'click',
                    callback: (e) => {
                        e.preventDefault();
                        const router = new Router();
                        router.go('/chats/')
                    },
                    selectors: '.chats-link'
                },
                {
                    type: 'click',
                    callback: (e) => {
                        e.preventDefault();
                        const router = new Router();
                        router.go('/sign-in/')
                    },
                    selectors: '.sign-out-link'
                },
                ...events,
            ]
        });
    }


    get profileHeader() {
        return new ProfileHeader().render()
    }
    get profileInfo() {
        const {
            profile,
            isOpenAvatarDialog,
            isOpenPasswordDialog,
            isOpenProfileDialog
        } = this.props;
        return new ProfileInfo({
            profile,
            isOpenAvatarDialog,
            isOpenPasswordDialog,
            isOpenProfileDialog
        }).render()
    }

    render() {
        const { profileHeader, profileInfo } = this;
        return compileTemplate(template, {
            profileHeader,
            profileInfo
        })
    }
}
