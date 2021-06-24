import Block from '../../../utils/Block';
import compileTemplate from '../../../utils/compileTemplate';
import { avatarTemplate } from './avatar.template';

import './avatar.scss';

export type AvatarProps = {
  className?: string;
  src?: string;
  size?: 'large' | 'medium' | 'small';
  isClickable?: boolean;
};

export class Avatar extends Block<AvatarProps> {
  render() {
    return compileTemplate(avatarTemplate, this.props);
  }
}
