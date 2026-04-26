import { LOOT_LIST } from '@/sections/loot/loot';
import { data } from '.';
import { RABBITS } from '@/sections/rabbits/rabbits';
import { AREAS } from './constants';
import { uppercaseFirstLetter } from '@/lib/utils';
import { STORY } from '@/sections/achievements/achievements';

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

    // Collect loot data
    for (const loot of LOOT_LIST) {
        data.loot[loot.key]!.cleared = (parseFloat(raw?.ItemDiscovery?.[loot.key] ?? '0') & 0b111100) > 0;
    }

    // Collect area data
    for (const [key, area] of Object.entries(AREAS)) {
        const capKey = uppercaseFirstLetter(area.saveKeyOverride ?? key);
        data.areas[key]!.cuteClear = parseFloat(raw?.SaveInfo?.[`mapWin${capKey}C`] ?? '0') > 0;
        data.areas[key]!.normalClear = parseFloat(raw?.SaveInfo?.[`mapWin${capKey}N`] ?? '0') > 0;
        data.areas[key]!.hardClear = parseFloat(raw?.SaveInfo?.[`mapWin${capKey}H`] ?? '0') > 0;
        data.areas[key]!.lunarClear = parseFloat(raw?.SaveInfo?.[`mapWin${capKey}L`] ?? '0') > 0;
    }

    // Collect story data
    for (const story of STORY) {
        data.story[story.key]!.flag = parseFloat(raw?.StoryFlag?.[story.flagKey] ?? '0');
    }
};
