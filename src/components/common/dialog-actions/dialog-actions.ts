import Block from '../../../modules/block/Block';
import compileTemplate from '../../../utils/compileTemplate';
import { dialogActionsTemplate } from './dialog-actions.template';

import './dialog-actions.scss';

export type DialogActionsProps = {
  className?: string;
  child?: string;
};

export class DialogActions extends Block<DialogActionsProps> {
  render() {
    return compileTemplate(dialogActionsTemplate, this.props);
  }
}
