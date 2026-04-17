import { Percent } from '@/lib/Percent';
import { computed } from 'vue';
import { ACHIEVEMENTS } from './achievements';

export const achievementsPercents = Object.fromEntries(
    Object.entries(ACHIEVEMENTS).map(([name, section]) => {
        return [name, Percent.array(section, (achievement) => achievement.unlocked.value)];
    }),
) as Record<keyof typeof ACHIEVEMENTS, Percent>;

export const achievementsPercent = computed(() =>
    Percent.compound(Object.values(achievementsPercents)).labeled('achievements'),
);

export const areaClearsPercent = computed(() =>
    Percent.compound([
        achievementsPercents.areasNormal,
        achievementsPercents.areasHard,
        achievementsPercents.areasLunar,
    ]),
);
