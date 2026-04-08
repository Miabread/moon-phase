import { DEFAULT_RABBITS, RABBITS } from '@/layout/rabbitClears/rabbits';
import { data } from '@/data';
import { Percent } from '@/lib/Percent';
import { computed } from 'vue';

export const rabbitClearPercents = {
    unlocked: computed(() =>
        Percent.object(
            data.rabbits,
            // Ignore default unlocked rabbits
            (r, key) => (DEFAULT_RABBITS.includes(key) ? null : r.unlocked),
        ).labeled('unlocked'),
    ),
    palettes: {
        adept: computed(() => Percent.object(data.rabbits, (r) => r.palettes.adept).labeled('palettes')),
        challenger: computed(() => Percent.object(data.rabbits, (r) => r.palettes.challenger).labeled('palettes')),
        master: computed(() => Percent.object(data.rabbits, (r) => r.palettes.master).labeled('palettes')),
        spellbound: computed(() => Percent.object(data.rabbits, (r) => r.palettes.spellbound).labeled('palettes')),
    },
    rings: {
        flower: computed(() => Percent.object(data.rabbits, (r) => r.rings.flower).labeled('clears')),
        star: computed(() => Percent.object(data.rabbits, (r) => r.rings.star).labeled('clears')),
        lunar: computed(() => Percent.object(data.rabbits, (r) => r.rings.lunar).labeled('clears')),
    },
};

export const rabbitClearPercent = computed(() =>
    Percent.compound([
        rabbitClearPercents.unlocked,
        rabbitClearPercents.palettes.adept,
        rabbitClearPercents.palettes.challenger,
        rabbitClearPercents.palettes.master,
        rabbitClearPercents.palettes.spellbound,
        rabbitClearPercents.rings.flower,
        rabbitClearPercents.rings.star,
        rabbitClearPercents.rings.lunar,
    ]).labeled('clears'),
);

// Don't include unlock runs because they're not with "runs with that rabbit"
export const rabbitClearPercentsByRabbit = computed(() =>
    RABBITS.map(({ key }) => {
        const rabbit = data.rabbits[key]!;
        let current = 0;

        if (rabbit.palettes.adept) current++;
        if (rabbit.palettes.challenger) current++;
        if (rabbit.palettes.master) current++;
        if (rabbit.rings.flower) current++;
        if (rabbit.rings.star) current++;
        if (rabbit.rings.lunar) current++;

        return new Percent(current, 7);
    }),
);
