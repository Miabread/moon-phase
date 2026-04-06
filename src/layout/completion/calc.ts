import { rabbitClearPercent } from '../rabbitClears/calc';
import { musicUnlockPercent } from '../musicUnlocks/calc';
import { Percent } from '@/lib/Percent';
import { computed } from 'vue';
import { trinketUnlockPercent } from '../trinketUnlocks/calc';
import { achievementsPercent } from '../achievements/calc';
import { lootClearPercent } from '../lootClears/calc';

export const totalCompletion = computed(() =>
    Percent.compound([
        achievementsPercent,
        rabbitClearPercent,
        trinketUnlockPercent,
        lootClearPercent.value.weighted(0.5),
        musicUnlockPercent,
    ]).labeled('estimated runs'),
);
