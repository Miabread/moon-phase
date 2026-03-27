import { uppercaseFirstLetter } from '@/lib/utils';
import { data } from '.';
import { DEFAULT_RABBITS, RABBITS } from '../constants';
import { MUSIC } from '@/constants/music';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const loadUnlockdata = (raw: any) => {
    // Collect data for every rabbit
    for (let index = 0; index < RABBITS.length; index++) {
        const rabbit = RABBITS[index]!;
        const rabbitData = data.rabbits[rabbit.key]!;

        // See if character is unlocked in general
        rabbitData.unlocked =
            DEFAULT_RABBITS.includes(rabbit.key) ||
            parseFloat(raw?.UnlockOther?.['char' + uppercaseFirstLetter(rabbit.key)]) === 1;

        if (rabbit.key === 'spellsword') {
            rabbitData.unlocked = parseFloat(raw?.UnlockOther?.charSpBlade) === 1;
        }

        // Gather all palette unlock data
        rabbitData.palettes.adept = parseFloat(raw?.UnlockOther?.['paletteHard' + index]) === 1;
        rabbitData.palettes.challenger = parseFloat(raw?.UnlockOther?.['paletteDlcHard' + index]) === 1;
        rabbitData.palettes.master = parseFloat(raw?.UnlockOther?.['paletteLunar' + index]) === 1;
        rabbitData.palettes.spellbound = parseFloat(raw?.UnlockOther?.['paletteDlcLunar' + index]) === 1;
    }

    // Collect data for each music
    for (let index = 0; index < MUSIC.length; index++) {
        const key = MUSIC[index]!.key;
        try {
            data.music[key]!.unlocked = parseFloat(raw?.UnlockOther?.[key]) === 1;
        } catch {
            console.log({ key });
        }
    }
};
