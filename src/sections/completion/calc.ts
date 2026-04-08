import { rabbitClearPercent } from '../rabbits/calc';
import { musicUnlockPercent } from '../music/calc';
import { Percent } from '@/lib/Percent';
import { computed } from 'vue';
import { trinketUnlockPercent } from '../trinkets/calc';
import { achievementsPercent } from '../achievements/calc';
import { lootClearPercent } from '../loot/calc';

export const totalCompletion = computed(() =>
    Percent.compound([
        achievementsPercent,
        rabbitClearPercent,
        trinketUnlockPercent,
        lootClearPercent.value.weighted(0.5),
        musicUnlockPercent,
    ]).labeled('estimated runs'),
);
