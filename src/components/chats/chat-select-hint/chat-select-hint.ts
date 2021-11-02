import Block from '../../../modules/block/Block';
import compileTemplate from '../../../utils/compileTemplate';
import { chatSelectHintTemplate } from './chat-select-hint.template';

import './chat-select-hint.scss';

export class ChatSelectHint extends Block {
  render() {
    return compileTemplate(chatSelectHintTemplate);
  }
}
