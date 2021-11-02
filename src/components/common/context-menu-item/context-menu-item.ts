import Block from '../../../modules/block/Block';
import compileTemplate from '../../../utils/compileTemplate';
import { contextMenuItemTemplate } from './context-menu-item.template';

import './context-menu-item.scss';

export type ContextMenuItemProps = {
  icon?: string;
  className?: string;
  title?: string;
};

export class ContextMenuItem extends Block<ContextMenuItemProps> {
  render() {
    return compileTemplate(contextMenuItemTemplate, this.props);
  }
}
