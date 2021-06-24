import Block from '../../../utils/Block';
import compileTemplate from '../../../utils/compileTemplate';
import { chatPreviewTemplate } from './chat-preview.template';

import './chat-preview.scss';
import { Avatar } from '../../common/avatar';
import { Badge } from '../../common/badge';
import { TimeBadge } from '../../common/time-badge';

export type ChatPreviewProps = {
  avatar?: string;
  name?: string;
  description?: string;
  unreadMessages?: number;
  formattedTime?: string;
  isActive?: boolean;
  variant?: 'default' | 'small'
};

export class ChatPreview extends Block<ChatPreviewProps> {
  get avatar() {
    const { avatar, variant } = this.props;
    const isSmall = variant === 'small';
    return new Avatar({
      src: avatar,
      size: isSmall ? 'small' : undefined,
    }).render();
  }

  get timeBadge() {
    const { formattedTime } = this.props;
    return new TimeBadge({
      value: formattedTime,
    }).render();
  }

  get badge() {
    const { unreadMessages } = this.props;
    if (!unreadMessages) {
      return null;
    }
    return new Badge({
      variant: 'primary',
      value: unreadMessages,
    }).render();
  }

  render() {
    const { avatar, timeBadge, badge } = this;
    const { name, description, isActive } = this.props;
    return compileTemplate(chatPreviewTemplate, {
      name,
      description,
      isActive,
      avatar,
      timeBadge,
      badge,
    });
  }
}
