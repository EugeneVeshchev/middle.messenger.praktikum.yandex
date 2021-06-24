import Block from '../../../utils/Block';
import compileTemplate from '../../../utils/compileTemplate';
import { chatTemplate } from './chat.template';

import './chat.scss';
import { ChatHeader, ChatHeaderProps } from '../chat-header';
import { ChatMessageList, ChatMessageListProps } from '../chat-message-list';
import { ChatNewMessage } from '../chat-new-message';

export type ChatProps = {
  name: ChatHeaderProps['name'];
  avatar: ChatHeaderProps['avatar'];
  messages: ChatMessageListProps['messages']
};

export class Chat extends Block<ChatProps> {
  get chatHeader() {
    const { name, avatar } = this.props;
    return new ChatHeader({
      name,
      avatar,
    }).render();
  }

  get chatMessagesList() {
    const { messages } = this.props;
    return new ChatMessageList({
      messages,
    }).render();
  }

  get chatSendMessage() {
    return new ChatNewMessage().render();
  }

  render() {
    const { chatHeader, chatMessagesList, chatSendMessage } = this;
    return compileTemplate(chatTemplate, {
      chatHeader,
      chatMessagesList,
      chatSendMessage,
    });
  }
}
