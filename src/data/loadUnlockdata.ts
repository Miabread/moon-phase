import { data } from '.';
import { DEFAULT_RABBITS, RABBITS } from './constants';
import { uppercaseFirstLetter } from './helpers';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const loadUnlockdata = (raw: any) => {
    // Collect data for every rabbit
    for (let index = 0; index < RABBITS.length; index++) {
        const rabbit = RABBITS[index]!;

        // See if character is unlocked in general
        data.rabbits[rabbit.key]!.unlocked =
            DEFAULT_RABBITS.includes(rabbit.key) || raw?.UnlockOther?.['char' + uppercaseFirstLetter(rabbit.key)] === 1;

        // Gather all palette unlock data
        data.rabbits[rabbit.key]!.palettes.kingdomHard = raw?.UnlockOther?.['paletteHard' + index] === 1;
        data.rabbits[rabbit.key]!.palettes.extraHard = raw?.UnlockOther?.['paletteDlcHard' + index] === 1;
        data.rabbits[rabbit.key]!.palettes.kingdomLunar = raw?.UnlockOther?.['paletteLunar' + index] === 1;
        data.rabbits[rabbit.key]!.palettes.extraLunar = raw?.UnlockOther?.['paletteDlcLunar' + index] === 1;
    }
};
