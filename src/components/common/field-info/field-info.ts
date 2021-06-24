import Block from '../../../utils/Block';
import compileTemplate from '../../../utils/compileTemplate';
import { fieldInfoTemplate } from './field-info.template';

import './field-info.scss';

export type FieldInfoProps = {
  className?: string;
  label?: string;
  value?: string;
};

export class FieldInfo extends Block<FieldInfoProps> {
  render() {
    return compileTemplate(fieldInfoTemplate, this.props);
  }
}
