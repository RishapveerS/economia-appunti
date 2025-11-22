import React from 'react';
import katex from 'katex';

interface MathRendererProps {
    latex: string;
}

const MathRenderer: React.FC<MathRendererProps> = ({ latex }) => {
    const html = katex.renderToString(latex, {
        throwOnError: false,
        displayMode: true,
    });

    return (
        <div className="my-8 overflow-x-auto py-4">
            <div
                className="inline-block bg-premium-gold/20 px-4 py-2 rounded-sm"
                dangerouslySetInnerHTML={{ __html: html }}
            />
        </div>
    );
};

export default MathRenderer;
