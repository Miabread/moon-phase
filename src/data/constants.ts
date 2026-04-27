export const VERSION = '1.1';

export const BUNDLES = ['savedata', 'unlockdata'] as const;

export const DIFFICULTIES = {
    cute: {
        title: 'Cute',
        color: '#94cdff',
        icon: '//static.wikitide.net/rnswiki/c/c6/Difficulty_Cute.png',
    },
    normal: {
        title: 'Normal',
        color: '#fddfa9',
        icon: '//static.wikitide.net/rnswiki/b/b2/Difficulty_Normal.png',
    },
    hard: {
        title: 'Hard',
        color: '#ff6576',
        icon: '//static.wikitide.net/rnswiki/a/a2/Difficulty_Hard.png',
    },
    lunar: {
        title: 'Lunar',
        color: '#a372f1',
        icon: '//static.wikitide.net/rnswiki/a/af/Difficulty_Lunar.png',
    },
};

export const AREAS = {
    outskirts: {
        title: 'Kingdom Outskirts',
        color: '#6b628b',
        icon: '//static.wikitide.net/rnswiki/6/6f/Area_Kingdom_Outskirts.png',
        hasAchievements: false,
        saveKeyOverride: null,
    },
    nest: {
        title: "Scholar's Nest",
        color: '#8d45ff',
        icon: '//static.wikitide.net/rnswiki/7/70/Area_Scholar%27s_Nest.png',
        hasAchievements: true,
        saveKeyOverride: null,
    },
    arsenal: {
        title: "King's Arsenal",
        color: '#555aac',
        icon: '//static.wikitide.net/rnswiki/b/b3/Area_King%27s_Arsenal.png',
        hasAchievements: true,
        saveKeyOverride: null,
    },
    darkhouse: {
        title: 'Red Darkhouse',
        color: '#ff4b67',
        icon: '//static.wikitide.net/rnswiki/3/33/Area_Red_Darkhouse.png',
        hasAchievements: true,
        saveKeyOverride: 'lighthouse',
    },
    streets: {
        title: 'Churchmouse Streets',
        color: '#ffe2b3',
        icon: '//static.wikitide.net/rnswiki/9/97/Area_Churchmouse_Streets.png',
        hasAchievements: true,
        saveKeyOverride: null,
    },
    lakeside: {
        title: 'Emerald Lakeside',
        color: '#77ffbb',
        icon: '//static.wikitide.net/rnswiki/0/00/Area_Emerald_Lakeside.png',
        hasAchievements: true,
        saveKeyOverride: null,
    },
    keep: {
        title: 'Pale Keep',
        color: '#eef0d7',
        icon: '//static.wikitide.net/rnswiki/1/11/Area_The_Pale_Keep.png',
        hasAchievements: false,
        saveKeyOverride: null,
    },
    pinnacle: {
        title: 'Moonlit Pinnacle',
        color: '#efedd9',
        icon: '//static.wikitide.net/rnswiki/9/9b/Area_Moonlit_Pinnacle.png',
        hasAchievements: true,
        saveKeyOverride: null,
    },
    geode: {
        title: 'Crack in The Geode',
        color: '#c6a483',
        icon: '//static.wikitide.net/rnswiki/a/a0/Area_Crack_In_The_Geode.png',
        hasAchievements: false,
        saveKeyOverride: null,
    },
    depths: {
        title: 'Darkhouse Depths',
        color: '#b93283',
        icon: '//static.wikitide.net/rnswiki/b/bb/Area_Darkhouse_Depths.png',
        hasAchievements: true,
        saveKeyOverride: null,
    },
    atelier: {
        title: 'Atelier Aurum',
        color: '#deb485',
        icon: '//static.wikitide.net/rnswiki/4/48/Area_Atelier_Aurum.png',
        hasAchievements: true,
        saveKeyOverride: 'aurum',
    },
    sanctum: {
        title: 'Subterra Sanctum',
        color: '#b1e2da',
        icon: '//static.wikitide.net/rnswiki/3/31/Area_Subterra_Sanctum.png',
        hasAchievements: true,
        saveKeyOverride: 'sanct',
    },
    hallway: {
        title: 'Looping Hallway',
        color: '#33394b',
        icon: '//static.wikitide.net/rnswiki/7/76/Area_Looping_Hallway.png',
        hasAchievements: false,
        saveKeyOverride: 'darkhall',
    },
    pool: {
        title: 'Reflecting Pool',
        color: '#7f77da',
        icon: '//static.wikitide.net/rnswiki/1/18/Area_Reflecting_Pool.png',
        hasAchievements: true,
        saveKeyOverride: 'reflection',
    },
};
