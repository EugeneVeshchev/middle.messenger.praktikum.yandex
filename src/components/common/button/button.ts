import Block from '../../../modules/block/Block';
import compileTemplate from '../../../utils/compileTemplate';
import { buttonTemplate } from './button.template';

import './button.scss';

type ButtonProps = {
  title: string;
  variant?: 'primary' | 'secondary' | 'transparent'
  type?: string;
  className?: string;
};
export default class Button extends Block<ButtonProps> {
  render() {
    return compileTemplate(buttonTemplate, this.props);
  }
}
