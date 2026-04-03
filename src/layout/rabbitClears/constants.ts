import { data } from '@/data';
import { DIFFICULTIES } from '@/constants';
import { Rabbit } from 'lucide-vue-next';
import { rabbitClearPercents } from './calc';

type Rabbit = (typeof data)['rabbits'][string];

const TEMP_ICONS = {
    rabbit: '//static.wikitide.net/rnswiki/5/56/Spr_trinket_small_rabbit_6.png',

    kingdom: '//static.wikitide.net/rnswiki/1/11/Area_The_Pale_Keep.png',
    extra: '//static.wikitide.net/rnswiki/7/76/Area_Looping_Hallway.png',

    flowerRing: '//static.wikitide.net/rnswiki/8/8d/Spr_trinket_magic_circle_n_0.png',
    starRing: '//static.wikitide.net/rnswiki/3/3a/Spr_trinket_magic_circle_h_0.png',
    lunarRing: '//static.wikitide.net/rnswiki/4/42/Spr_trinket_magic_circle_l_0.png',
};

export const ROWS = [
    {
        title: 'Unlocked',
        checked: (r: Rabbit) => r.unlocked,
        icon: TEMP_ICONS.rabbit,
        progress: rabbitClearPercents.unlocked,
        color: DIFFICULTIES.hard.color,
        condition: null,
    },
    {
        title: 'Adept Palette',
        checked: (r: Rabbit) => r.palettes.adept,
        icon: TEMP_ICONS.kingdom,
        progress: rabbitClearPercents.palettes.adept,
        color: DIFFICULTIES.hard.color,
        condition: 'Complete a Kingdom run on Hard.',
    },
    {
        title: 'Challenger Palette',
        checked: (r: Rabbit) => r.palettes.challenger,
        icon: TEMP_ICONS.extra,
        progress: rabbitClearPercents.palettes.challenger,
        color: DIFFICULTIES.hard.color,
        condition: 'Complete a Extra run on Hard.',
    },
    {
        title: 'Master Palette',
        checked: (r: Rabbit) => r.palettes.master,
        icon: TEMP_ICONS.kingdom,
        progress: rabbitClearPercents.palettes.master,
        color: DIFFICULTIES.lunar.color,
        condition: 'Complete a Kingdom run on Lunar.',
    },
    {
        title: 'Spellbound Palette',
        checked: (r: Rabbit) => r.palettes.spellbound,
        icon: TEMP_ICONS.extra,
        progress: rabbitClearPercents.palettes.spellbound,
        color: DIFFICULTIES.lunar.color,
        condition: 'Complete a Extra run on Lunar.',
    },
    {
        title: 'Flower Ring',
        checked: (r: Rabbit) => r.rings.flower,
        icon: TEMP_ICONS.flowerRing,
        progress: rabbitClearPercents.rings.flower,
        color: DIFFICULTIES.normal.color,
        condition: 'Complete a True Random or Chaotic Random run on Normal.',
    },
    {
        title: 'Star Ring',
        checked: (r: Rabbit) => r.rings.star,
        icon: TEMP_ICONS.starRing,
        progress: rabbitClearPercents.rings.star,
        color: DIFFICULTIES.hard.color,
        condition: 'Complete a True Random or Chaotic Random run on Hard.',
    },
    {
        title: 'Lunar Ring',
        checked: (r: Rabbit) => r.rings.lunar,
        icon: TEMP_ICONS.lunarRing,
        progress: rabbitClearPercents.rings.lunar,
        color: DIFFICULTIES.lunar.color,
        condition: 'Complete a True Random or Chaotic Random run on Lunar.',
    },
];
