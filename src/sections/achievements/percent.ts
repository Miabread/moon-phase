import { Percent } from '@/lib/Percent';
import { computed, type ComputedRef } from 'vue';
import { ACHIEVEMENTS } from './achievements';

export const achievementsPercents = Object.fromEntries(
    Object.entries(ACHIEVEMENTS).map(([name, section]) => {
        return [name, computed(() => Percent.array(section, (achievement) => achievement.unlocked.value))];
    }),
) as Record<keyof typeof ACHIEVEMENTS, ComputedRef<Percent>>;

export const achievementsPercent = computed(() =>
    Percent.compound(Object.values(achievementsPercents)).labeled('achievements'),
);

export const otherSectionsAchievementPercent = computed(() =>
    Percent.compound([achievementsPercents.rabbits, achievementsPercents.trinkets, achievementsPercents.music]),
);

export const areaClearsPercent = computed(() =>
    Percent.compound([
        achievementsPercents.areasNormal,
        achievementsPercents.areasHard,
        achievementsPercents.areasLunar,
    ]),
);
