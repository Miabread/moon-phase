import { rabbitClearPercent } from '../rabbitClears/calc';
import { musicUnlockPercent } from '../musicUnlocks/calc';
import { Percent } from '@/lib/Percent';
import { computed } from 'vue';
import { trinketUnlockPercent } from '../trinketUnlocks/calc';

export const totalCompletion = computed(() =>
    Percent.compound([rabbitClearPercent, trinketUnlockPercent, musicUnlockPercent]),
);
