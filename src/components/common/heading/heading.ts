import Block from '../../../modules/block/Block';
import compileTemplate from '../../../utils/compileTemplate';
import { headingTemplate } from './heading.template';

import './heading.scss';

type HeadingTagName = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
export type HeadingProps = {
  tagName: HeadingTagName;
  className?: string;
  title?: string | number;
};
export class Heading extends Block<HeadingProps> {
  render() {
    return compileTemplate(headingTemplate, this.props);
  }
}
