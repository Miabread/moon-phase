import { Percent } from '@/lib/Percent';
import { computed } from 'vue';
import { ACHIEVEMENTS } from './achievements';

const ACTUAL_TOTAL_ACHIEVEMENTS = 54;

export const achievementsPercents = Object.fromEntries(
    Object.entries(ACHIEVEMENTS).map(([name, section]) => {
        return [name, Percent.array(section, (achievement) => achievement.unlocked.value)];
    }),
) as Record<keyof typeof ACHIEVEMENTS, Percent>;

const specialWipAchievementsPercent = computed(() =>
    Percent.compound(Object.values(achievementsPercents)).labeled('achievements'),
);

export const unaccountedForAchievements = computed(
    () => ACTUAL_TOTAL_ACHIEVEMENTS - specialWipAchievementsPercent.value.total,
);

export const achievementsPercent = computed(() => {
    return new Percent(specialWipAchievementsPercent.value.current, ACTUAL_TOTAL_ACHIEVEMENTS).labeled('achievements');
});
