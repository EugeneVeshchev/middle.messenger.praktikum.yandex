import Block from "../modules/block/Block";

export default function render<TBlock extends Block>(query: string, block: TBlock) {
    const root = document.querySelector(query);
    if (!root) {
        throw new Error(`No root element for render by query ${query}`)
    }
    root.append(block.getContent());
    return root;
}
