import { data } from '.';
import { RABBITS } from './constants';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const loadSavedata = (raw: any) => {
    // Collect ring data
    const flowerRing = parseFloat(raw?.SaveInfo?.ringLockWinN ?? '0');
    const starRing = parseFloat(raw?.SaveInfo?.ringLockWinH ?? '0');
    const lunarRing = parseFloat(raw?.SaveInfo?.ringLockWinL ?? '0');

    for (let index = 0; index < RABBITS.length; index++) {
        const rings = data.rabbits[RABBITS[index]!.key]!.rings;
        rings.flower = ((1 << index) & flowerRing) !== 0;
        rings.star = ((1 << index) & starRing) !== 0;
        rings.lunar = ((1 << index) & lunarRing) !== 0;
    }
};
