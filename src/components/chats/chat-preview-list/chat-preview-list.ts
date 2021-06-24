import Block from '../../../utils/Block';
import { ChatPreview, ChatPreviewProps } from '../chat-preview/chat-preview';
import compileTemplate from '../../../utils/compileTemplate';
import { chatPreviewListTemplate } from './chat-preview-list.template';

import './chat-preview-list.scss';

export type ChatPreviewListProps = {
  chats: ChatPreviewProps[]
};

export class ChatPreviewList extends Block<ChatPreviewListProps> {
  get chats() {
    const { chats } = this.props;
    return chats.map((chat) => (
      new ChatPreview(chat).render()
    ));
  }

  render() {
    const { chats } = this;
    return compileTemplate(chatPreviewListTemplate, {
      chats,
    });
  }
}
