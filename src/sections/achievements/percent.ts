import { Percent } from '@/lib/Percent';
import { computed, type ComputedRef } from 'vue';
import { ACHIEVEMENTS } from './achievements';
import { data } from '@/data';
import { AREAS } from '@/data/constants';

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

export const areaClearsPercentsByArea = computed(() =>
    Object.keys(AREAS).map((key) => {
        const area = data.areas[key]!;
        let current = 0;

        // TODO Don't include cute mode for now
        if (area.normalClear) current++;
        if (area.hardClear) current++;
        if (area.lunarClear) current++;

        return new Percent(current, 3);
    }),
);
