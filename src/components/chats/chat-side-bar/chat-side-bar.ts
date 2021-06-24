import { ChatPreviewList, ChatPreviewListProps } from '../chat-preview-list';
import Block from '../../../utils/Block';
import { ChatSearchingList } from '../chat-searching-list';
import compileTemplate from '../../../utils/compileTemplate';
import { chatSideBarTemplate } from './chat-side-bar.template';

import './chat-side-bar.scss';
import { Avatar } from '../../common/avatar';
import { Icon } from '../../common/icon';
import Link from '../../common/link';
import { TextField } from '../../common/text-field';

export type ChatSideBarProps = {
  chats: ChatPreviewListProps['chats']
};

export class ChatSideBar extends Block<ChatSideBarProps> {
  get userAvatar() {
    return new Avatar({
      size: 'small',
    }).render();
  }

  get searchField() {
    return new TextField({
      id: 'search',
      name: 'search',
      placeholder: 'Поиск',
      required: true,
      variant: 'primary',
    }).render();
  }

  get profileLink() {
    return new Link({
      href: '/profile',
      variant: 'primary',
      title: 'Профиль',
      rightIcon: new Icon({
        className: 'link__icon link__icon_right',
        name: 'keyboard_arrow_right',
      }).render(),
    }).render();
  }

  get chatPreviewList() {
    const { chats } = this.props;
    return new ChatPreviewList({
      chats,
    }).render();
  }

  get chatSearchingList() {
    const { chats } = this.props;
    return new ChatSearchingList({
      chats,
    }).render();
  }

  render() {
    const {
      userAvatar, searchField, profileLink, chatPreviewList, chatSearchingList,
    } = this;
    return compileTemplate(chatSideBarTemplate, {
      userAvatar,
      searchField,
      profileLink,
      chatPreviewList,
      chatSearchingList,
    });
  }
}
