import Block from '../../../modules/block/Block';
import compileTemplate from '../../../utils/compileTemplate';
import { chatTemplate } from './chat.template';

import './chat.scss';
import { ChatHeaderProps } from '../chat-header';
import { ChatMessageListProps } from '../chat-message-list';


export type ChatProps = {
  name: ChatHeaderProps['name'];
  avatar: ChatHeaderProps['avatar'];
  messages: ChatMessageListProps['messages']
};

export class Chat extends Block<ChatProps> {
  render() {
    const { name, avatar, messages } = this.props;
    return compileTemplate(chatTemplate, {
      name,
      avatar,
      messages,
    });
  }
}
