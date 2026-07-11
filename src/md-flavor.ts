import type {Plugin} from 'unified';
import type {Visitor} from 'unist-util-visit';
import {visit} from 'unist-util-visit';
import type {Text} from 'mdast';
import type {Element, ElementContent} from "hast";


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
                        children: [{type: 'text', value: part.slice(2, -2)}],
                        data: {
                            hName: 'span',
                            hProperties: {className: 'md-highlight'},
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

// === deal with image only table

function getMeaningfulChildren(node: Element): ElementContent[] {
    return (node.children ?? []).filter(
        (c): c is ElementContent => !(c.type === 'text' && !c.value?.trim())
    );
}

function isImageOnlyCell(cell: Element): boolean {
    const kids = getMeaningfulChildren(cell);
    return kids.length > 0 && kids.every(k => k.type === 'element' && k.tagName === 'img');
}

function getTableRows(tableNode: Element): Element[] {
    const rows: Element[] = [];
    for (const section of tableNode.children ?? []) {
        if (section.type === 'element' && (section.tagName === 'thead' || section.tagName === 'tbody')) {
            for (const tr of section.children ?? []) {
                if (tr.type === 'element' && tr.tagName === 'tr') rows.push(tr);
            }
        }
    }
    return rows;
}

export function isImageGalleryTable(tableNode: Element): boolean {
    const rows = getTableRows(tableNode);
    if (rows.length === 0) return false;
    return rows.every(tr => {
        const cells = (tr.children ?? []).filter(
            (c): c is Element => c.type === 'element' && (c.tagName === 'td' || c.tagName === 'th')
        );
        return cells.length > 0 && cells.every(isImageOnlyCell);
    });
}
