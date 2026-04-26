import { computed, type ComputedRef } from 'vue';
import { trinketUnlockPercent } from '../trinkets/percent';
import { rabbitClearPercents } from '../rabbits/percent';
import { uppercaseFirstLetter } from '@/lib/utils';

export interface Achievement {
    title: string;
    description: string;
    icon: string;
    unlocked: ComputedRef<boolean>;
}

const trinketAchievement = (n: number, icon: string): Achievement => ({
    title: `${n} Trinkets`,
    description: `Collect ${n} Trinkets`,
    icon,
    unlocked: computed(() => trinketUnlockPercent.value.current >= n),
});

const areaClearAchievement = (
    area: (typeof ACHIEVEMENT_AREAS)[number],
    difficulty: 'normal' | 'hard' | 'lunar',
): Achievement => {
    const displayDifficulty = uppercaseFirstLetter(difficulty);
    return {
        title:
            area.title === 'Moonlit Pinnacle'
                ? `${displayDifficulty} Clear`
                : area.title === 'Reflecting Pool'
                  ? `${displayDifficulty} Clear (Extra)`
                  : `The ${area.title} (${displayDifficulty})`,

        description: `Beat the ${area.title} on ${displayDifficulty} Mode`,
        icon: area[difficulty],
        unlocked: computed(() => false),
    };
};

const ACHIEVEMENT_AREAS = [
    {
        title: "Scholar's Nest",
        normal: '//shared.fastly.steamstatic.com/community_assets/images/apps/2132850/566d8083f1b30a1a4cd51a825d331e089ed28e16.jpg',
        hard: '//shared.fastly.steamstatic.com/community_assets/images/apps/2132850/a512d4c9d94eaf14bc073541aafed44d828f0e64.jpg',
        lunar: '//shared.fastly.steamstatic.com/community_assets/images/apps/2132850/933815e705b5a2025496448eaaf50ba884eec0f2.jpg',
    },
    {
        title: "King's Arsenal",
        normal: '//shared.fastly.steamstatic.com/community_assets/images/apps/2132850/98473a85626ca3200c744f7d7eaaffdb4a690e99.jpg',
        hard: '//shared.fastly.steamstatic.com/community_assets/images/apps/2132850/0b384d206e6b7f25044ba73ae1b60199acca89cd.jpg',
        lunar: '//shared.fastly.steamstatic.com/community_assets/images/apps/2132850/5d717ee758421b0d1fbc332ba3792907a8e80496.jpg',
    },
    {
        title: 'Red Darkhouse',
        normal: '//shared.fastly.steamstatic.com/community_assets/images/apps/2132850/e3c03370e70ec2fb7d1740f7c7a843a0ab48fb08.jpg',
        hard: '//shared.fastly.steamstatic.com/community_assets/images/apps/2132850/c64eae412ce0521ce5601248accb9dd3dd7e3f0f.jpg',
        lunar: '//shared.fastly.steamstatic.com/community_assets/images/apps/2132850/fc75fccbe618a9b7123ca9dcb5ff754269392a86.jpg',
    },
    {
        title: 'Churchmouse Streets',
        normal: '//shared.fastly.steamstatic.com/community_assets/images/apps/2132850/66084ca42a6102e19c4787fec758d41da93ce311.jpg',
        hard: '//shared.fastly.steamstatic.com/community_assets/images/apps/2132850/78d433fa1c0dcbddce998c3a7b755a0161d121c5.jpg',
        lunar: '//shared.fastly.steamstatic.com/community_assets/images/apps/2132850/126b18206d28eb8d9df11c4fac66b6a42631d1f1.jpg',
    },
    {
        title: 'Emerald Lakeside',
        normal: '//shared.fastly.steamstatic.com/community_assets/images/apps/2132850/29fb5f3ebca8359e066f190482ea6ebd35403f9d.jpg',
        hard: '//shared.fastly.steamstatic.com/community_assets/images/apps/2132850/24a81f7c5311df2e2560f43d03fed5186ae2df8f.jpg',
        lunar: '//shared.fastly.steamstatic.com/community_assets/images/apps/2132850/2203300503b931744229f97e5a83209bc5a9eb2d.jpg',
    },
    {
        title: 'Moonlit Pinnacle',
        normal: '//shared.fastly.steamstatic.com/community_assets/images/apps/2132850/8aeae00d0222ffc5ed4439a5053d9b4a43774c93.jpg',
        hard: '//shared.fastly.steamstatic.com/community_assets/images/apps/2132850/eb3e9a4f28c68a3f2c0665866b21e17cd7fd6c1c.jpg',
        lunar: '//shared.fastly.steamstatic.com/community_assets/images/apps/2132850/b853f34f6722b0d13d5d46dc19e667ae06b5a7cc.jpg',
    },
    {
        title: 'Darkhouse Depths',
        normal: '//shared.fastly.steamstatic.com/community_assets/images/apps/2132850/33860af89084e71f2d4b3acdf8ca9b74cc28e571.jpg',
        hard: '//shared.fastly.steamstatic.com/community_assets/images/apps/2132850/9ff7aea157378ef38b267974b421ac2ac4d12109.jpg',
        lunar: '//shared.fastly.steamstatic.com/community_assets/images/apps/2132850/d9fee0af875b83eaf2f0b87f1e5a69c93eb5a427.jpg',
    },
    {
        title: 'Atelier Aurum',
        normal: '//shared.fastly.steamstatic.com/community_assets/images/apps/2132850/186e5bd846155c8b97a6f23ec7202262848ea033.jpg',
        hard: '//shared.fastly.steamstatic.com/community_assets/images/apps/2132850/5202a73fd719d897401750532c6d4aac7ff063ca.jpg',
        lunar: '//shared.fastly.steamstatic.com/community_assets/images/apps/2132850/c814352a8c9c9ab813dc386bd94baaca62ec7d7a.jpg',
    },
    {
        title: 'Subterra Sanctum',
        normal: '//shared.fastly.steamstatic.com/community_assets/images/apps/2132850/f448977dd8c88f676914b371a926e20f292a4f14.jpg',
        hard: '//shared.fastly.steamstatic.com/community_assets/images/apps/2132850/e2a3ad049f8c007355575bfef5646d81e41f8bb4.jpg',
        lunar: '//shared.fastly.steamstatic.com/community_assets/images/apps/2132850/665056e1e4af4aa673cc59a291da7ca03973e620.jpg',
    },
    {
        title: 'Reflecting Pool',
        normal: '//shared.fastly.steamstatic.com/community_assets/images/apps/2132850/5af97ca85b4c10c949a8ab0bbc5e4a379e1b2cc8.jpg',
        hard: '//shared.fastly.steamstatic.com/community_assets/images/apps/2132850/740db77d70a91afa32b30697919dc784c7da9227.jpg',
        lunar: '//shared.fastly.steamstatic.com/community_assets/images/apps/2132850/9a925cdc643cc8675c65484523bc3deacb8de8dc.jpg',
    },
];

export const ACHIEVEMENTS = {
    story: [
        {
            title: 'Sisterly Love',
            description: 'Help break the Spell on the Crows',
            icon: '//shared.fastly.steamstatic.com/community_assets/images/apps/2132850/14671a167e0ce025ca11b8e707253901ce140163.jpg',
            unlocked: computed(() => false),
        },
        {
            title: 'A Pack of Equals',
            description: 'Help break the Spell on the Wolves',
            icon: '//shared.fastly.steamstatic.com/community_assets/images/apps/2132850/340a31fc08150ca1d5c0d9222cf32b04c014c1d0.jpg',
            unlocked: computed(() => false),
        },
        {
            title: 'Regret',
            description: 'Help break the Spell on the Dragons',
            icon: '//shared.fastly.steamstatic.com/community_assets/images/apps/2132850/36cd8f12fc6b3970a56c2d0b4aa112bb9522e1c2.jpg',
            unlocked: computed(() => false),
        },
        {
            title: 'The Strongest Mouse I Know',
            description: 'Help break the Spell on the Mice',
            icon: '//shared.fastly.steamstatic.com/community_assets/images/apps/2132850/502238693af47d39668ab024eb4b8c313b322d7a.jpg',
            unlocked: computed(() => false),
        },
        {
            title: 'A Wonderful Collab',
            description: 'Help break the Spell on the Frogs',
            icon: '//shared.fastly.steamstatic.com/community_assets/images/apps/2132850/0b4582f32667100a1d5144b9b19d99b9f8db5a33.jpg',
            unlocked: computed(() => false),
        },
        {
            title: 'Forget This Ambition',
            description: 'Free Shira from the Spell',
            icon: '//shared.fastly.steamstatic.com/community_assets/images/apps/2132850/d76983ae5581eab272b7cc3241dcc97008a077fe.jpg',
            unlocked: computed(() => false),
        },
        {
            title: 'I Hope You Found a Friend',
            description: 'End the Spell once and for all, and return home',
            icon: '//shared.fastly.steamstatic.com/community_assets/images/apps/2132850/2684995e006a806e4eb1c3d5edee0affd738bd3e.jpg',
            unlocked: computed(() => false),
        },
    ],
    areasNormal: ACHIEVEMENT_AREAS.map((area) => areaClearAchievement(area, 'normal')),
    areasHard: ACHIEVEMENT_AREAS.map((area) => areaClearAchievement(area, 'hard')),
    areasLunar: ACHIEVEMENT_AREAS.map((area) => areaClearAchievement(area, 'lunar')),
    rabbits: [
        {
            title: 'Seeing Red',
            description: 'Unlock 10 Adept/Challenger Palettes',
            icon: '//shared.fastly.steamstatic.com/community_assets/images/apps/2132850/29914de38edddc84d590600ec6cbea2a19314e79.jpg',
            unlocked: computed(
                () =>
                    rabbitClearPercents.palettes.adept.value.current +
                        rabbitClearPercents.palettes.challenger.value.current >=
                    10,
            ),
        },
        {
            title: 'Rise to the Challenge',
            description: 'Unlock 20 Adept/Challenger Palettes',
            icon: '//shared.fastly.steamstatic.com/community_assets/images/apps/2132850/1f99041e241b65d80041ffeae1c18e951cb2268c.jpg',
            unlocked: computed(
                () =>
                    rabbitClearPercents.palettes.adept.value.current +
                        rabbitClearPercents.palettes.challenger.value.current >=
                    20,
            ),
        },
        {
            title: 'A True Challenger',
            description: 'Unlock all Adept/Challenger Palettes',
            icon: '//shared.fastly.steamstatic.com/community_assets/images/apps/2132850/f90c23097d03183785e95b54e54e9e2877cffec4.jpg',
            unlocked: computed(
                () =>
                    rabbitClearPercents.palettes.adept.value.current +
                        rabbitClearPercents.palettes.challenger.value.current >=
                    28,
            ),
        },
        {
            title: 'Rabbit Rabbit Rabbit',
            description: 'Unlock 10 Master/Spellbreaker Palettes',
            icon: '//shared.fastly.steamstatic.com/community_assets/images/apps/2132850/a91bb5f6a4f15750a7748a691396d2ea6fa4a96c.jpg',
            unlocked: computed(
                () =>
                    rabbitClearPercents.palettes.master.value.current +
                        rabbitClearPercents.palettes.spellbound.value.current >=
                    10,
            ),
        },
        {
            title: 'Master of Many',
            description: 'Unlock 20 Master/Spellbreaker Palettes',
            icon: '//shared.fastly.steamstatic.com/community_assets/images/apps/2132850/1aff6ad90c7836caafefc21cd8e943039690651a.jpg',
            unlocked: computed(
                () =>
                    rabbitClearPercents.palettes.master.value.current +
                        rabbitClearPercents.palettes.spellbound.value.current >=
                    20,
            ),
        },
        {
            title: 'Dedicated Spellbreaker',
            description: 'Unlock all Master/Spellbreaker Palettes',
            icon: '//shared.fastly.steamstatic.com/community_assets/images/apps/2132850/9624a35bceb0b4db49aadc4a3fe96c71a5e9b53a.jpg',
            unlocked: computed(
                () =>
                    rabbitClearPercents.palettes.master.value.current +
                        rabbitClearPercents.palettes.spellbound.value.current >=
                    28,
            ),
        },
    ],
    trinkets: [
        trinketAchievement(
            10,
            '//shared.fastly.steamstatic.com/community_assets/images/apps/2132850/a30d161ca4d8d3cca2359ff077287055f7c9bded.jpg',
        ),
        trinketAchievement(
            20,
            '//shared.fastly.steamstatic.com/community_assets/images/apps/2132850/f9ebec08d312ade1ac1e4b1d8f0095ae4d81d2a9.jpg',
        ),
        trinketAchievement(
            30,
            '//shared.fastly.steamstatic.com/community_assets/images/apps/2132850/4296ee411f4d036a977bb0e33daf3fd98315a90a.jpg',
        ),
        trinketAchievement(
            40,
            '//shared.fastly.steamstatic.com/community_assets/images/apps/2132850/d6f9dd8ae8bd4dabfea80e98c4d0fa764c19c349.jpg',
        ),
        trinketAchievement(
            50,
            '//shared.fastly.steamstatic.com/community_assets/images/apps/2132850/b04771e831f9ee3a4d6617732f232a29edd6a3f3.jpg',
        ),
        trinketAchievement(
            60,
            '//shared.fastly.steamstatic.com/community_assets/images/apps/2132850/cca89d947c1072786022999f9157f69fc62f24b8.jpg',
        ),
        trinketAchievement(
            70,
            '//shared.fastly.steamstatic.com/community_assets/images/apps/2132850/bff52bd191255e69c8de7d985663b06d93edbf91.jpg',
        ),
        {
            title: 'The Moonlight Floofball',
            description: 'Collect the Moonlight Floofball',
            icon: '//shared.fastly.steamstatic.com/community_assets/images/apps/2132850/7cc3dac3512142cd25901b8676f14603e65769a4.jpg',
            unlocked: computed(() => false),
        },
        {
            title: 'The Spellbound Floofball',
            description: ' Collect the Spellbound Floofball',
            icon: '//shared.fastly.steamstatic.com/community_assets/images/apps/2132850/dcc8ab1f6adf183890024888d5bce7d2b165daea.jpg',
            unlocked: computed(() => false),
        },
    ],
    music: [
        {
            title: 'Moonlit Melodies',
            description: 'Unlock all of the Kingdom music tracks',
            icon: '//shared.fastly.steamstatic.com/community_assets/images/apps/2132850/1015cd6644311a617f3a4699779386dc28f7fe9b.jpg',
            unlocked: computed(() => false),
        },
        {
            title: 'Music For the Heart',
            description: 'Unlock all of the Extra music tracks',
            icon: '//shared.fastly.steamstatic.com/community_assets/images/apps/2132850/c2e976861d629f3bae2cb0f0cf18e12d231641a0.jpg',
            unlocked: computed(() => false),
        },
    ],
};
