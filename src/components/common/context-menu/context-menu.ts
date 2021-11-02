import Block from '../../../modules/block/Block';
import compileTemplate from '../../../utils/compileTemplate';
import { contextMenuTemplate } from './context-menu.template';

import './context-menu.scss';
import { ContextMenuItemProps } from '../context-menu-item';

export type ContextMenuProps = {
  className?: string;
  items: ContextMenuItemProps[]
};

export class ContextMenu extends Block<ContextMenuProps> {

  render() {
    const { className, items } = this.props;
    console.log('items', items)
    return compileTemplate(contextMenuTemplate, {
      items,
      className,
    });
  }
}
