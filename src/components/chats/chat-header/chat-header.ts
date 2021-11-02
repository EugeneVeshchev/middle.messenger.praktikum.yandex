import Block from '../../../modules/block/Block';
import compileTemplate from '../../../utils/compileTemplate';
import {chatHeaderTemplate} from './chat-header.template';

import './chat-header.scss';

export type ChatHeaderProps = {
  name?: string
  avatar?: string
};

export class ChatHeader extends Block<ChatHeaderProps> {

  render() {
    const {avatar, name} = this.props;
    return compileTemplate(chatHeaderTemplate, {
      avatar,
      name,
      items: [
        {
          icon: 'add_circle_outline',
          className: 'context-menu-item__icon',
          title: 'Добавить пользователя',
        },
        {
          icon: 'highlight_off',
          className: 'context-menu-item__icon',
          title: 'Удалить пользователя',
        }
      ]
    });
  }
}
