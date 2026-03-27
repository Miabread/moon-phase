import { RABBITS } from '@/constants';
import { data } from '@/data';
import { computedSumPercent } from '@/lib/utils';
import { computed } from 'vue';

export const bunnyMath = (cond: (rabbit: (typeof data)['rabbits'][string]) => boolean) =>
    computed(() => {
        const count = Object.values(data.rabbits).filter(cond).length;
        return Math.floor((count / RABBITS.length) * 100);
    });

export const rabbitClearPercents = {
    unlocked: bunnyMath((r) => r.unlocked),
    palettes: {
        adept: bunnyMath((r) => r.palettes.adept),
        challenger: bunnyMath((r) => r.palettes.challenger),
        master: bunnyMath((r) => r.palettes.master),
        spellbound: bunnyMath((r) => r.palettes.spellbound),
    },
    rings: {
        flower: bunnyMath((r) => r.rings.flower),
        star: bunnyMath((r) => r.rings.star),
        lunar: bunnyMath((r) => r.rings.lunar),
    },
};

export const rabbitClearPercent = computedSumPercent([
    rabbitClearPercents.unlocked,
    rabbitClearPercents.palettes.adept,
    rabbitClearPercents.palettes.challenger,
    rabbitClearPercents.palettes.master,
    rabbitClearPercents.palettes.spellbound,
    rabbitClearPercents.rings.flower,
    rabbitClearPercents.rings.star,
    rabbitClearPercents.rings.lunar,
]);
