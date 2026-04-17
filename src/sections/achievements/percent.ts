import { Percent } from '@/lib/Percent';
import { computed } from 'vue';
import { ACHIEVEMENTS } from './achievements';

const ACTUAL_TOTAL_ACHIEVEMENTS = 54;

export const achievementsPercents = Object.fromEntries(
    Object.entries(ACHIEVEMENTS).map(([name, section]) => {
        return [name, Percent.array(section, (achievement) => achievement.unlocked.value)];
    }),
) as Record<keyof typeof ACHIEVEMENTS, Percent>;

export const achievementsPercent = computed(() => {
    const percent = Percent.compound(Object.values(achievementsPercents));
    percent.total = ACTUAL_TOTAL_ACHIEVEMENTS;
    return percent.labeled('achievements');
});
