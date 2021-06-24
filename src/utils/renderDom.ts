import Block from './Block';

export default function render<TBlock extends Block>(query: string, block: TBlock) {
  const root = document.querySelector(query);
  if (root) {
    root.append(block.getContent());
  }
  return root;
}
