import { data } from '@/data';
import { AREAS, DIFFICULTIES } from '@/data/constants';
import { Rabbit } from 'lucide-vue-next';
import { rabbitClearPercents } from './percent';
import { TRINKET_QUICK } from '@/sections/trinkets/trinkets';

type Rabbit = (typeof data)['rabbits'][string];

export const ROWS = [
    {
        title: 'Unlocked',
        checked: (r: Rabbit) => r.unlocked,
        icon: TRINKET_QUICK.smallRabbit.icon,
        progress: rabbitClearPercents.unlocked,
        color: DIFFICULTIES.hard.color,
        condition: null,
    },
    {
        title: 'Adept Palette',
        checked: (r: Rabbit) => r.palettes.adept,
        icon: AREAS.keep.icon,
        progress: rabbitClearPercents.palettes.adept,
        color: DIFFICULTIES.hard.color,
        condition: 'Complete a Kingdom run on Hard',
    },
    {
        title: 'Challenger Palette',
        checked: (r: Rabbit) => r.palettes.challenger,
        icon: AREAS.hallway.icon,
        progress: rabbitClearPercents.palettes.challenger,
        color: DIFFICULTIES.hard.color,
        condition: 'Complete a Extra run on Hard',
    },
    {
        title: 'Master Palette',
        checked: (r: Rabbit) => r.palettes.master,
        icon: AREAS.pinnacle.icon,
        progress: rabbitClearPercents.palettes.master,
        color: DIFFICULTIES.lunar.color,
        condition: 'Complete a Kingdom run on Lunar',
    },
    {
        title: 'Spellbound Palette',
        checked: (r: Rabbit) => r.palettes.spellbound,
        icon: AREAS.pool.icon,
        progress: rabbitClearPercents.palettes.spellbound,
        color: DIFFICULTIES.lunar.color,
        condition: 'Complete a Extra run on Lunar',
    },
    {
        title: 'Flower Ring',
        checked: (r: Rabbit) => r.rings.flower,
        icon: TRINKET_QUICK.flowerRing.icon,
        progress: rabbitClearPercents.rings.flower,
        color: DIFFICULTIES.normal.color,
        condition: 'Complete a True Random or Chaotic Random run on Normal',
    },
    {
        title: 'Star Ring',
        checked: (r: Rabbit) => r.rings.star,
        icon: TRINKET_QUICK.starRing.icon,
        progress: rabbitClearPercents.rings.star,
        color: DIFFICULTIES.hard.color,
        condition: 'Complete a True Random or Chaotic Random run on Hard',
    },
    {
        title: 'Lunar Ring',
        checked: (r: Rabbit) => r.rings.lunar,
        icon: TRINKET_QUICK.lunarRing.icon,
        progress: rabbitClearPercents.rings.lunar,
        color: DIFFICULTIES.lunar.color,
        condition: 'Complete a True Random or Chaotic Random run on Lunar',
    },
];
