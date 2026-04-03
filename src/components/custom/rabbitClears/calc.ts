import { DEFAULT_RABBITS } from '@/constants';
import { data } from '@/data';
import { Percent } from '@/lib/Percent';
import { computed } from 'vue';

export const rabbitClearPercents = {
    // TODO have this ignore default unlocked rabbits
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
