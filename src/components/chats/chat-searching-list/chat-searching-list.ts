import { ChatPreviewProps } from '../chat-preview/chat-preview';
import Block from '../../../modules/block/Block';
import compileTemplate from '../../../utils/compileTemplate';
import { chatSearchingListTemplate } from './chat-searching-list.template';

export type ChatSearchingListProps = {
  className?: string;
  chats: ChatPreviewProps[];
  onChangeChat: (id: string) => void;
};

export class ChatSearchingList extends Block<ChatSearchingListProps> {
  render() {
    const { chats, onChangeChat } = this.props;
    return compileTemplate(chatSearchingListTemplate, {
      chats,
      onChangeChat,
    });
  }
}
