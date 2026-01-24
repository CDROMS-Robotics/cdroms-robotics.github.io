import type {Plugin} from 'unified';
import type {Visitor} from 'unist-util-visit';
import {visit} from 'unist-util-visit';
import type {Text} from 'mdast';


export const remarkHighlight: Plugin = () => {
    return (tree) => {
        const visitor: Visitor<Text> = (node, index, parent) => {
            if (!parent || index === undefined) return;
            if (!node.value.includes('==')) return;

            const parts = node.value.split(/(==.*?==)/g).filter(Boolean);

            const newNodes = parts.map((part) => {
                if (part.startsWith('==') && part.endsWith('==')) {
                    return {
                        type: 'emphasis',
                        children: [{ type: 'text', value: part.slice(2, -2) }],
                        data: {
                            hName: 'span',
                            hProperties: { className: 'md-highlight' },
                        },
                    };
                }
                return {type: 'text', value: part};
            });

            parent.children.splice(index, 1, ...newNodes);
        };

        visit(tree, 'text', visitor);
    };
};
