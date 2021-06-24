import Block from '../../../utils/Block';
import compileTemplate from '../../../utils/compileTemplate';
import { badgeTemplate } from './badge.template';

import './badge.scss';

export type BadgeProps = {
  className?: string;
  variant?: 'primary' | 'secondary' | 'error'
  value?: string | number;
};

export class Badge extends Block<BadgeProps> {
  render() {
    return compileTemplate(badgeTemplate, this.props);
  }
}
