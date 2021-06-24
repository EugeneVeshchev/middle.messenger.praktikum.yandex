import Block from '../../../utils/Block';
import compileTemplate from '../../../utils/compileTemplate';
import { timeBadgeTemplate } from './time-badge.template';

import './time-badge.scss';

export type TimeBadgeProps = {
  className?: string;
  value?: string | number;
};

export class TimeBadge extends Block<TimeBadgeProps> {
  render() {
    return compileTemplate(timeBadgeTemplate, this.props);
  }
}
