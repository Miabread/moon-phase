import { rabbitClearPercent } from '../rabbitClears/calc';
import { musicUnlockPercent } from '../musicUnlocks/calc';
import { Percent } from '@/lib/Percent';
import { computed } from 'vue';

export const totalCompletion = computed(() => Percent.compound([rabbitClearPercent, musicUnlockPercent]));
