import Block from '../../../utils/Block';
import compileTemplate from '../../../utils/compileTemplate';
import { iconButtonTemplate } from './icon-button.template';

import './icon-button.scss';

export type IconButtonProps = {
  variant?: 'primary' | 'secondary' | 'disabled'
  icon?: string
  child?: string
  type?: string
  className?: string
};

export class IconButton extends Block<IconButtonProps> {
  render() {
    return compileTemplate(iconButtonTemplate, this.props);
  }
}
