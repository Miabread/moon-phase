import { data } from '@/data';
import { computedEntriesPercent } from '@/lib/utils';

export const musicUnlockPercent = computedEntriesPercent(data.music, (m) => m.unlocked);
