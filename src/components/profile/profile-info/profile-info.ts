import {FormHelperMeta} from "../../../utils/FormHelper";
import Block from "../../../utils/Block";
import {Avatar} from "../../common/avatar";
import {Dialog} from "../../common/dialog";
import {Form} from "../../common/form";
import {DialogHeader} from "../../common/dialog-header";
import {DialogContent} from "../../common/dialog-content";
import {FileField} from "../../common/file-field";
import {DialogActions} from "../../common/dialog-actions";
import Button from "../../common/button";
import {FieldInfo} from "../../common/field-info";
import {FormFields} from "../../common/form-fields";
import {TextField} from "../../common/text-field";
import compileTemplate from "../../../utils/compileTemplate";
import {profileInfoTemplate} from "./profile-info.template";

import './profile-info.scss'
import {User} from "../../../pages/profile/profile";

export type ProfileInfoProps = {
    isOpenAvatarDialog?: boolean;
    isOpenProfileDialog?: boolean;
    profile: FormHelperMeta<User>;
    isOpenPasswordDialog?: boolean;
}

export class ProfileInfo extends Block<ProfileInfoProps> {

    get avatar() {
        return new Avatar({
            size: 'large',
            isClickable: true,
        }).render()
    }

    get avatarDialog() {
        const {isOpenAvatarDialog} = this.props;
        return new Dialog({
            isOpen: isOpenAvatarDialog,
            child: new Form({
                className: 'content_column-16',
                children: [
                    new DialogHeader({
                        title: 'Изменение автара'
                    }).render(),
                    new DialogContent({
                        child: [
                            new FileField({
                                id: 'avatar',
                                name: 'avatar',
                                required: true,
                            }).render()
                        ].join()
                    }).render(),
                    new DialogActions({
                        child: new Button({
                            className: 'button_full-width',
                            variant: 'primary',
                            title: 'Изменить',
                            type: 'submit'
                        }).render()
                    }).render()
                ]
            }).render()
        }).render()
    }

    get fields() {
        const {profile} = this.props;
        if (!profile) {
            return []
        }
        const {
            values: {
                email,
                login,
                first_name,
                second_name,
                display_name,
                phone
            }
        } = profile;

        return [
            new FieldInfo({
                label: 'Почта',
                value: email
            }).render(),
            new FieldInfo({
                label: 'Логин',
                value: login
            }).render(),
            new FieldInfo({
                label: 'Имя',
                value: first_name
            }).render(),
            new FieldInfo({
                label: 'Фамилия',
                value: second_name
            }).render(),
            new FieldInfo({
                label: 'Имя в чате',
                value: display_name
            }).render(),
            new FieldInfo({
                label: 'Телефон',
                value: phone
            }).render(),
        ]
    }

    get changeProfileButton() {
        return new Button({
            variant: 'transparent',
            className: 'button_left-align',
            title: 'Изменить профиль'
        }).render()
    }

    get changeProfileDialog() {
        const {isOpenProfileDialog, profile} = this.props;
        const {values, errors} = profile;
        return new Dialog({
            isOpen: isOpenProfileDialog,
            child: new Form({
                className: 'content_column-16',
                children: [
                    new DialogHeader({
                        title: 'Изменение профиля'
                    }).render(),
                    new DialogContent({
                        child: new FormFields({
                            errors,
                            values: [
                                {
                                    name: 'email',
                                    label: 'Почта',
                                    placeholder: 'Почта',
                                    value: values.email,
                                },
                                {
                                    name: 'login',
                                    label: 'Логин',
                                    placeholder: 'Введите логин',
                                    value: values.login,
                                },
                                {
                                    name: 'first_name',
                                    label: 'Имя',
                                    placeholder: 'Имя',
                                    value: values.first_name,
                                },
                                {
                                    name: 'second_name',
                                    label: 'Фамилия',
                                    placeholder: 'Фамилия',
                                    value: values.second_name,
                                },
                                {
                                    name: 'display_name',
                                    label: 'Имя в чате',
                                    placeholder: 'Имя в чате',
                                    value: values.display_name,
                                },
                                {
                                    name: 'phone',
                                    label: 'Телефон',
                                    placeholder: 'Введите телефон',
                                    value: values.phone,
                                },
                            ],
                        }).render()
                    }).render(),
                    new DialogActions({
                        child: new Button({
                            className: 'button_full-width',
                            variant: 'primary',
                            title: 'Изменить',
                            type: 'submit'
                        }).render()
                    }).render()
                ]
            }).render(),
        }).render()
    }

    get changePasswordButton() {
        return new Button({
            variant: 'transparent',
            className: 'button_left-align',
            title: 'Изменить пароль'
        }).render()
    }

    get changePasswordDialog() {
        const {isOpenPasswordDialog} = this.props;
        return new Dialog({
            isOpen: isOpenPasswordDialog,
            child: new Form({
                className: 'content_column-16',
                children: [
                    new DialogHeader({
                        title: 'Изменение пароля'
                    }).render(),
                    new DialogContent({
                        className: 'content_column-4',
                        child: [
                            new TextField({
                                variant: 'primary',
                                id: 'old_password',
                                name: 'old_password',
                                label: 'Текущий пароль',
                                placeholder: 'Введите текущий пароль',
                                required: true,
                            }).render(),
                            new TextField({
                                variant: 'primary',
                                id: 'new_password',
                                name: 'new_password',
                                type: 'password',
                                label: 'Новый пароль',
                                placeholder: 'Введите новый пароль',
                                required: true,
                            }).render(),
                            new TextField({
                                variant: 'primary',
                                id: 'repeat_password',
                                name: 'repeat_password',
                                type: 'password',
                                label: 'Повторите новый пароль',
                                placeholder: 'Повторите новый пароль',
                                required: true,
                            }).render(),
                        ].join()
                    }).render(),
                    new DialogActions({
                        child: new Button({
                            className: 'button_full-width',
                            variant: 'primary',
                            title: 'Изменить',
                            type: 'submit'
                        }).render()
                    }).render()
                ]
            }).render(),
        }).render()
    }

    render() {
        const {
            avatar,
            avatarDialog,
            fields,
            changeProfileButton,
            changeProfileDialog,
            changePasswordButton,
            changePasswordDialog
        } = this;

        return compileTemplate(profileInfoTemplate, {
            avatar,
            avatarDialog,
            fields,
            changeProfileButton,
            changeProfileDialog,
            changePasswordButton,
            changePasswordDialog,
        })
    }
}
