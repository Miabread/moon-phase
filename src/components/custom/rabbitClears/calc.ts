import { data } from '@/data';
import { computedEntriesPercent, computedSumPercent } from '@/lib/utils';

export const rabbitClearPercents = {
    unlocked: computedEntriesPercent(data.rabbits, (r) => r.unlocked),
    palettes: {
        adept: computedEntriesPercent(data.rabbits, (r) => r.palettes.adept),
        challenger: computedEntriesPercent(data.rabbits, (r) => r.palettes.challenger),
        master: computedEntriesPercent(data.rabbits, (r) => r.palettes.master),
        spellbound: computedEntriesPercent(data.rabbits, (r) => r.palettes.spellbound),
    },
    rings: {
        flower: computedEntriesPercent(data.rabbits, (r) => r.rings.flower),
        star: computedEntriesPercent(data.rabbits, (r) => r.rings.star),
        lunar: computedEntriesPercent(data.rabbits, (r) => r.rings.lunar),
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
