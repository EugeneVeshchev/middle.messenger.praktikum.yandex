import { ChatPreviewListProps } from '../chat-preview-list';
import Block from '../../../modules/block/Block';
import compileTemplate from '../../../utils/compileTemplate';
import { chatSideBarTemplate } from './chat-side-bar.template';

import './chat-side-bar.scss';

export type ChatSideBarProps = {
  chats: ChatPreviewListProps['chats']
  showingChats: ChatPreviewListProps['chats']
  isSearching?: boolean
  onChangeChat: (id: string) => void;
};

export class ChatSideBar extends Block<ChatSideBarProps> {

  constructor(props: Omit<ChatSideBarProps, 'showingChats' | 'isSearching'>) {
    super({
      ...props,
      showingChats: props.chats
    });
  }

  handleSearch(e: Event) {
    e.preventDefault();
    const search = new FormData(e.target as HTMLFormElement).get('search') || '';
    const { chats } = this.props;
    console.log({
      search,
      chats,
      showing: chats.filter(chat => chat?.name?.toLowerCase().includes(String(search).toLowerCase()))
    });

    this.setProps({
      isSearching: true,
      showingChats: chats.filter(chat => chat?.name?.toLowerCase().includes(String(search).toLowerCase()))
    })
  }

  render() {
    const { isSearching, showingChats, onChangeChat } = this.props;

    console.log('isSearching', isSearching)
    console.log('showingChats', showingChats)

    return compileTemplate(chatSideBarTemplate, {
      chats: showingChats,
      onChangeChat,
      isSearching,
      onSearch: this.handleSearch.bind(this),
    });
  }
}
