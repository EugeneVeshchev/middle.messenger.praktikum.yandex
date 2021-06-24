import Block from '../../../utils/Block';
import compileTemplate from '../../../utils/compileTemplate';
import { formTemplate } from './form.template';

import './form.scss';

export type FormProps = {
  className?: string;
  children?: string[]
};

export class Form extends Block<FormProps> {
  render() {
    return compileTemplate(formTemplate, this.props);
  }
}
