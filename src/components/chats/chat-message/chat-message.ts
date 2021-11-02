import Block from '../../../modules/block/Block';
import compileTemplate from '../../../utils/compileTemplate';
import { chatMessageTemplate } from './chat-message.template';

import './chat-message.scss';

export type ChatMessageProps = {
  isSelf?: boolean;
  text?: string;
  image?: string;
  formattedTime?: string;
};

export class ChatMessage extends Block<ChatMessageProps> {
  render() {
    const { image, text, isSelf, formattedTime } = this.props;
    return compileTemplate(chatMessageTemplate, {
      image,
      text,
      isSelf,
      formattedTime,
    });
  }
}
