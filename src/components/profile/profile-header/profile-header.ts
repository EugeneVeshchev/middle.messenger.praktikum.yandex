import Block from '../../../modules/block/Block';
import {Link} from '../../common/link';
import { Icon } from '../../common/icon';
import compileTemplate from '../../../utils/compileTemplate';
import { profileHeaderTemplate } from './profile-header.template';

import './profile-header.scss';

export class ProfileHeader extends Block {
  get chatsLink() {
    return new Link({
      href: '/chats',
      className: 'chats-link',
      title: 'Чаты',
      variant: 'primary',
      leftIcon: new Icon({
        name: 'keyboard_arrow_left',
      }).render(),
    }).render();
  }

  get signOutLink() {
    return new Link({
      href: '/sign-in',
      className: 'sign-out-link',
      title: 'Выйти',
      variant: 'error',
      rightIcon: new Icon({
        name: 'keyboard_arrow_right',
      }).render(),
    }).render();
  }

  render() {
    const { chatsLink, signOutLink } = this;
    return compileTemplate(profileHeaderTemplate, {
      chatsLink,
      signOutLink,
    });
  }
}
