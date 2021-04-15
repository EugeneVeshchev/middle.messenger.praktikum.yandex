import Block from "../../../modules/block/Block";
import compileTemplate from "../../../utils/compileTemplate";
import {template} from "./temlate";

export default class Logotype extends Block {
    render() {
        return compileTemplate(template)
    }
}
