import Block from '../../../modules/block/Block';
import { ChatPreviewProps } from '../chat-preview/chat-preview';
import compileTemplate from '../../../utils/compileTemplate';
import { chatPreviewListTemplate } from './chat-preview-list.template';

import './chat-preview-list.scss';

export type ChatPreviewListProps = {
  chats: ChatPreviewProps[];
  onChangeChat: (id: string) => void;
};

export class ChatPreviewList extends Block<ChatPreviewListProps> {
  render() {
    const { chats, onChangeChat } = this.props;
    return compileTemplate(chatPreviewListTemplate, {
      chats,
      onChangeChat,
    });
  }
}
