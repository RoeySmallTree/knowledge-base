export function getVendorIcon(vendorName: string, family: string) {
    const normalize = (value: string) => value.toLowerCase().replace(/[^a-z0-9]/g, '');
    const v = normalize(vendorName);
    const f = normalize(family);

    if (f.includes('gpt')) return '/llm-icons/gpt.png';
    if (f.includes('claude')) return '/llm-icons/claude.png';
    if (f.includes('gemini')) return '/llm-icons/gemini.png';
    if (f.includes('llama')) return '/llm-icons/Meta.png';
    if (f.includes('qwen')) return '/llm-icons/qwen.png';
    if (f.includes('grok')) return '/llm-icons/x-aI.png';

    const vendorMap: Record<string, string> = {
        openai: 'gpt.png',
        anthropic: 'claude.png',
        google: 'gemini.png',
        meta: 'Meta.png',
        microsoft: 'Microsoft.png',
        mistral: 'mistral.png',
        nvidia: 'nvidia.png',
        cohere: 'cohere.png',
        deepseek: 'deepseek.png',
        alibaba: 'alibaba.png',
        qwen: 'qwen.png',
        bytedance: 'bytedanceseed.png',
        gryphe: 'gryphe.png',
        allenai: 'allenai.png',
        arceeai: 'arcee.png',
        minimax: 'minimax.png',
        primeintellect: 'prime-intelect.png',
        zai: 'Z-ai.png'
    };

    const matched = vendorMap[v];
    if (matched) return `/llm-icons/${matched}`;
    return '/llm-icons/ai-placeholder.png';
}
