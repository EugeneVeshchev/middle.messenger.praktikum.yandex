import Block from '../../../utils/Block';
import compileTemplate from '../../../utils/compileTemplate';
import { iconTemplate } from './icon.template';

export type IconProps = {
  className?: string;
  name?: string;
};

export class Icon extends Block<IconProps> {
  render() {
    return compileTemplate(iconTemplate, this.props);
  }
}
