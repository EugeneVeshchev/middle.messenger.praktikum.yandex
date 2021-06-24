import Block from '../../../utils/Block';
import compileTemplate from '../../../utils/compileTemplate';
import { chatSelectHintTemplate } from './chat-select-hint.template';

import './chat-select-hint.scss';
import Heading from '../../common/heading';

export class ChatSelectHint extends Block {
  get heading() {
    return new Heading({
      title: 'Выберите чат, чтобы начать общение',
      tagName: 'h3',
      className: 'chat-select-hint__text',
    }).render();
  }

  render() {
    const { heading } = this;
    return compileTemplate(chatSelectHintTemplate, {
      heading,
    });
  }
}
