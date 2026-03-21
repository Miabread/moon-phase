import { data } from '.';
import { DEFAULT_RABBITS, RABBITS } from './constants';
import { uppercaseFirstLetter } from './helpers';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const loadUnlockdata = (raw: any) => {
    // Collect data for every rabbit
    for (let index = 0; index < RABBITS.length; index++) {
        const rabbit = RABBITS[index]!;
        const rabbitData = data.rabbits[rabbit.key]!;

        // See if character is unlocked in general
        rabbitData.unlocked =
            DEFAULT_RABBITS.includes(rabbit.key) || raw?.UnlockOther?.['char' + uppercaseFirstLetter(rabbit.key)] === 1;

        // Gather all palette unlock data
        rabbitData.palettes.adept = raw?.UnlockOther?.['paletteHard' + index] === 1;
        rabbitData.palettes.challenger = raw?.UnlockOther?.['paletteDlcHard' + index] === 1;
        rabbitData.palettes.master = raw?.UnlockOther?.['paletteLunar' + index] === 1;
        rabbitData.palettes.spellbound = raw?.UnlockOther?.['paletteDlcLunar' + index] === 1;
    }
};
