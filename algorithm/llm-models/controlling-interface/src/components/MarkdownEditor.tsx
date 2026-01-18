import { useState, useEffect } from 'react';
import { marked } from 'marked';
import { Eye, Edit2, FileText } from 'lucide-react';

interface MarkdownEditorProps {
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    className?: string;
}

export function MarkdownEditor({ value, onChange, placeholder, className = '' }: MarkdownEditorProps) {
    const [isPreview, setIsPreview] = useState(false);
    const [htmlContent, setHtmlContent] = useState('');

    useEffect(() => {
        if (isPreview) {
            const parseMarkdown = async () => {
                const html = await marked.parse(value || '');
                setHtmlContent(html);
            };
            parseMarkdown();
        }
    }, [value, isPreview]);

    return (
        <div className={`flex flex-col border border-cyan-500/30 bg-black/40 backdrop-blur-sm rounded-lg overflow-hidden ${className}`}>
            <div className="flex items-center justify-between px-3 py-2 border-b border-cyan-500/20 bg-cyan-900/10">
                <div className="flex items-center gap-2 text-xs font-mono text-cyan-500/70">
                    <FileText className="w-4 h-4" />
                    <span>MARKDOWN_EDITOR_V1</span>
                </div>
                <div className="flex bg-black/50 rounded-md p-1 border border-cyan-500/20">
                    <button
                        type="button"
                        onClick={() => setIsPreview(false)}
                        className={`p-1.5 rounded transition-colors ${!isPreview ? 'bg-cyan-500/20 text-cyan-400' : 'text-cyan-500/50 hover:text-cyan-500'}`}
                        title="Edit"
                    >
                        <Edit2 className="w-3.5 h-3.5" />
                    </button>
                    <button
                        type="button"
                        onClick={() => setIsPreview(true)}
                        className={`p-1.5 rounded transition-colors ${isPreview ? 'bg-cyan-500/20 text-cyan-400' : 'text-cyan-500/50 hover:text-cyan-500'}`}
                        title="Preview"
                    >
                        <Eye className="w-3.5 h-3.5" />
                    </button>
                </div>
            </div>

            <div className="relative min-h-[200px]">
                {isPreview ? (
                    <div
                        className="markdown-preview max-w-none p-4 text-cyan-100/90 h-full overflow-y-auto custom-scrollbar"
                        dangerouslySetInnerHTML={{ __html: htmlContent }}
                    />
                ) : (
                    <textarea
                        value={value}
                        onChange={(e) => onChange(e.target.value)}
                        placeholder={placeholder}
                        className="w-full h-full min-h-[200px] p-4 bg-transparent text-cyan-100/90 font-mono text-sm resize-y focus:outline-none placeholder:text-cyan-500/30 custom-scrollbar"
                    />
                )}
            </div>
        </div>
    );
}
