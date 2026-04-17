import { computed, type ComputedRef } from 'vue';
import { trinketUnlockPercent } from '../trinkets/percent';
import { rabbitClearPercents } from '../rabbits/percent';

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

export const ACHIEVEMENTS = {
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
