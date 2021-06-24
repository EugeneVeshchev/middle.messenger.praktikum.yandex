import Block from '../../../utils/Block';
import compileTemplate from '../../../utils/compileTemplate';
import { template } from './logotype.temlate';

import './logotype.scss';

export default class Logotype extends Block {
  render() {
    return compileTemplate(template);
  }
}
