import { ChatSideBarProps } from '../../components/chats/chat-side-bar';
import Block from '../../modules/block/Block';
import compileTemplate from '../../utils/compileTemplate';
import { chatsTemplate } from './chats.template';

import './chats.scss';
import { navigateTo } from '../../utils/navigateTo';

const defaultSelectedChatIdx = 3;
const mockChats = Array.from({ length: 1 }, (_, idx) => ({
  id: String(idx + 1),
  description: `Достаточно длинное сообщение отображаемое в превью чата ${idx + 1}`,
  name: `Название чата ${idx + 1}`,
  unreadMessages: idx % 10 === 0 ? idx : 0,
  formattedTime: `${idx % 24}:${idx % 60}`,
  isActive: idx === defaultSelectedChatIdx,
}));
const defaultLongText = `
Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то момент попросила Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все знаем что астронавты летали с моделью 500 EL — и к слову говоря, все тушки этих камер все еще находятся на поверхности Луны, так как астронавты с собой забрали только кассеты с пленкой.Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то момент попросила Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все знаем что астронавты летали с моделью 500 EL — и к слову говоря, все тушки этих камер все еще находятся на поверхности Луны, так как астронавты с собой забрали только кассеты с пленкой.Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то момент попросила Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все знаем что астронавты летали с моделью 500 EL — и к слову говоря, все тушки этих камер все еще находятся на поверхности Луны, так как астронавты с собой забрали только кассеты с пленкой.
Хассельблад в итоге адаптировал SWC для космоса, но что-то пошло не так и на ракету они так никогда и не попали. Всего их было произведено 25 штук, одну из них недавно продали на аукционе за 45000 евро.
`;
const messages = [
  { text: defaultLongText, formattedTime: '18:19' },
  { text: 'Короткое сообщение', formattedTime: '18:20' },
  { image: '/assets/images/camera.png', formattedTime: '18:21' },
  { isSelf: true, text: 'Привет, круто!', formattedTime: '18:22' },
  { isSelf: true, image: '/assets/images/camera.png', formattedTime: '18:23' },
];
type ChatsPageProps = {
  activeChatIdx?: number;
  chats: ChatSideBarProps['chats'],
};

export class Chats extends Block<ChatsPageProps> {
  constructor() {
    super({
      activeChatIdx: defaultSelectedChatIdx,
      chats: mockChats,
      events: [
        {
          type: 'click',
          selectors: '.profile-link',
          callback: navigateTo('/profile'),
        },
      ],
    });
  }

  handleChangeChat(chatId: string) {
    const { chats, activeChatIdx = 0 } = this.props;

    const newChatIdx = chats.findIndex(({id}) => id === chatId)
    console.log('newChatIdx', newChatIdx);
    this.setProps({
      activeChatIdx: newChatIdx > -1 ? newChatIdx : activeChatIdx,
      chats: chats.map(chat => ({...chat, isActive: chat.id === chatId}))
    })
  };

  render() {
    const { activeChatIdx, chats } = this.props;
    const activeChat = activeChatIdx !== undefined ? chats[activeChatIdx] : undefined;

    return compileTemplate(chatsTemplate, {
      chats,
      activeChat,
      messages,
      onChangeChat: this.handleChangeChat.bind(this),
    });
  }
}
