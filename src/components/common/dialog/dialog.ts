import Block from '../../../modules/block/Block';
import compileTemplate from '../../../utils/compileTemplate';
import { dialogTemplate } from './dialog.template';

import './dialog.scss';

export type DialogProps = {
  isOpen?: boolean;
  className?: string;
  child?: string;
};

export class Dialog extends Block<DialogProps> {
  render() {
    return compileTemplate(dialogTemplate, this.props);
  }
}
