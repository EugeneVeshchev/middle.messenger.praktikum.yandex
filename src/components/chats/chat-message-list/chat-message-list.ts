import { ChatMessageProps } from '../chat-message';
import Block from '../../../modules/block/Block';
import compileTemplate from '../../../utils/compileTemplate';
import { chatMessageListTemplate } from './chat-message-list.template';

import './chat-message-list.scss';

export type ChatMessageListProps = {
  messages: ChatMessageProps[]
};

export class ChatMessageList extends Block<ChatMessageListProps> {
  render() {
    const { messages } = this.props;
    return compileTemplate(chatMessageListTemplate, {
      messages,
    });
  }
}
