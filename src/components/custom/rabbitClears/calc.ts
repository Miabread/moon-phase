import { data } from '@/data';
import { Percent } from '@/lib/Percent';
import { computed } from 'vue';

export const rabbitClearPercents = {
    unlocked: computed(() => Percent.count(data.rabbits, (r) => r.unlocked)),
    palettes: {
        adept: computed(() => Percent.count(data.rabbits, (r) => r.palettes.adept)),
        challenger: computed(() => Percent.count(data.rabbits, (r) => r.palettes.challenger)),
        master: computed(() => Percent.count(data.rabbits, (r) => r.palettes.master)),
        spellbound: computed(() => Percent.count(data.rabbits, (r) => r.palettes.spellbound)),
    },
    rings: {
        flower: computed(() => Percent.count(data.rabbits, (r) => r.rings.flower)),
        star: computed(() => Percent.count(data.rabbits, (r) => r.rings.star)),
        lunar: computed(() => Percent.count(data.rabbits, (r) => r.rings.lunar)),
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
    ]),
);
