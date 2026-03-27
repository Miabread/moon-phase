import { rabbitClearPercent } from '../rabbitClears/calc';
import { musicUnlockPercent } from '../musicUnlocks/calc';
import { computedSumPercent } from '@/lib/utils';

export const totalCompletion = computedSumPercent([rabbitClearPercent, musicUnlockPercent]);
