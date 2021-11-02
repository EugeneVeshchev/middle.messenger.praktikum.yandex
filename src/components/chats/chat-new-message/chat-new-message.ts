import Block from '../../../modules/block/Block';
import compileTemplate from '../../../utils/compileTemplate';
import { chatNewMessageTemplate } from './chat-new-message.template';

import './chat-new-message.scss';

export class ChatNewMessage extends Block {
  render() {
    return compileTemplate(chatNewMessageTemplate, {
      items: [
        {
          icon: 'add_photo_alternate',
          title: ' Фото или видео',
        },
        {
          icon: 'insert_drive_file',
          title: 'Файл',
        },
        {
          icon: 'location_on',
          title: 'Локация',
        },
      ],
    });
  }
}
