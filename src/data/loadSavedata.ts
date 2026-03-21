import { data } from '.';
import { RABBITS } from './constants';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const loadSavedata = (raw: any) => {
    // Collect ring data
    for (const [dataKey, rawKey] of [
        ['normal', 'ringLockWinN'],
        ['hard', 'ringLockWinH'],
        ['lunar', 'ringLockWinL'],
    ] as const) {
        const value = parseFloat(raw?.SaveInfo?.[rawKey] ?? '0');

        for (let index = 0; index < RABBITS.length; index++) {
            const rabbit = RABBITS[index]!;
            data.rabbits[rabbit.key]!.rings[dataKey] = value << index === 1;
        }
    }
};
