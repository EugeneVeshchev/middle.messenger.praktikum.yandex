import Block from '../../../utils/Block';
import compileTemplate from '../../../utils/compileTemplate';
import { linkTemplate } from './link.template';

import './link.scss';

type LinkProps = {
  href: string;
  title: string;
  type?: string;
  className?: string;
  variant?: 'primary' | 'secondary' | 'error'
  rightIcon?: string;
  leftIcon?: string;
};
export default class Link extends Block<LinkProps> {
  render() {
    return compileTemplate(linkTemplate, this.props);
  }
}
