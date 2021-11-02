import Block from '../../../modules/block/Block';
import compileTemplate from '../../../utils/compileTemplate';
import { chatPreviewTemplate } from './chat-preview.template';

import './chat-preview.scss';

export type ChatPreviewProps = {
  id?: string;
  avatar?: string;
  name?: string;
  description?: string;
  unreadMessages?: number;
  formattedTime?: string;
  isActive?: boolean;
  variant?: 'default' | 'small'
  onClick?: (id: string) => void;
};

export class ChatPreview extends Block<ChatPreviewProps> {

  handleClickChat(e: Event) {
    e.stopPropagation();
    const {onClick, id} = this.props;
    if (!id) {
      return
    }
    onClick?.(id)
  }

  render() {
    const {
      avatar, variant, name, description, isActive, unreadMessages, formattedTime,
    } = this.props;

    return compileTemplate(chatPreviewTemplate, {
      avatar,
      variant,
      name,
      description,
      unreadMessages,
      formattedTime,
      isActive,

      onClick: this.handleClickChat.bind(this)
    });
  }
}
