export * from './rabbits.ts';

export const VERSION = '0.1';

export const BUNDLES = ['savedata', 'unlockdata'] as const;

export const DIFFICULTIES = {
    cute: {
        color: '#94cdff',
        icon: '//static.wikitide.net/rnswiki/c/c6/Difficulty_Cute.png',
    },
    normal: {
        color: '#fddfa9',
        icon: '//static.wikitide.net/rnswiki/b/b2/Difficulty_Normal.png',
    },
    hard: {
        color: '#ff6576',
        icon: '//static.wikitide.net/rnswiki/a/a2/Difficulty_Hard.png',
    },
    lunar: {
        color: '#a372f1',
        icon: '//static.wikitide.net/rnswiki/a/af/Difficulty_Lunar.png',
    },
};

export const AREAS = {
    keep: { color: '#eef0d7' },
    nest: { color: '#8d45ff' },
    arsenal: { color: '#555aac' },
    darkhouse: { color: '#ff4b67' },
    streets: { color: '#ffe2b3' },
    lakeside: { color: '#77ffbb' },
};
