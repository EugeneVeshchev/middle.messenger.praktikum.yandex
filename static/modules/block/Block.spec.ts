import { spy, restore } from "sinon";
import { assert } from "chai";

import Block from "../block/Block";

describe('Test Block module', () => {
    function createBlock<TProps extends object = {}>(props: TProps = {} as TProps): Block<TProps> {
        return new Block(props)
    }

    beforeEach(() => {
        restore()
    })

    it('After create instance init -> componentDidMount -> render were called', () => {
        const spiedInit = spy(Block.prototype, 'init');
        const spiedCDM = spy(Block.prototype, '_componentDidMount');
        const spiedRender = spy(Block.prototype, 'render');

        createBlock();

        assert.isTrue(spiedInit.calledOnce);
        assert.isTrue(spiedCDM.calledAfter(spiedInit))
        assert.isTrue(spiedRender.calledAfter(spiedCDM))
    })

    it('Rerender after update props in block, componentDidUpdate -> render was called', () => {
        const spiedCDU = spy(Block.prototype, '_componentDidUpdate');
        const spiedRender = spy(Block.prototype, 'render');

        const block = createBlock({testProps: ''});
        block.setProps({testProps: 'new value'});

        assert.isTrue(spiedCDU.calledOnce);
        assert.isTrue(spiedRender.calledAfter(spiedCDU));
        assert.equal(spiedRender.callCount, 2);
    })

    it('Render return value must be added to block element', () => {
        const content = 'NotEmptyBlock';
        class NotEmptyBlock extends Block {
            render(): string {
                return content;
            }
        }
        const notEmptyBlock = new NotEmptyBlock();

        assert.include(notEmptyBlock.getContent().innerHTML, content);
    })
})
