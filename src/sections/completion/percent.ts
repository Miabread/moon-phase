import { rabbitClearPercent } from '../rabbits/percent';
import { musicUnlockPercent } from '../music/percent';
import { Percent } from '@/lib/Percent';
import { computed } from 'vue';
import { trinketUnlockPercent } from '../trinkets/percent';
import { achievementsPercent } from '../achievements/percent';
import { lootClearPercent } from '../loot/percent';

export const totalCompletion = computed(() =>
    Percent.compound([
        achievementsPercent,
        rabbitClearPercent,
        trinketUnlockPercent,
        lootClearPercent.value.weighted(0.5),
        musicUnlockPercent,
    ]).labeled('estimated runs'),
);
