import Block from '../../../modules/block/Block';
import compileTemplate from '../../../utils/compileTemplate';
import { dialogContentTemplate } from './dialog-content.template';

import './dialog-content.scss';

export type DialogContentProps = {
  className?: string;
  child?: string;
};

export class DialogContent extends Block<DialogContentProps> {
  render() {
    return compileTemplate(dialogContentTemplate, this.props);
  }
}
