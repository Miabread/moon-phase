import { reactive } from 'vue';
import { BUNDLES, RABBITS, VERSION } from '../constants';

export { loadSavedata } from './loadSavedata';
export { loadUnlockdata } from './loadUnlockdata';

const defaultData = () => ({
    version: VERSION,

    bundles: Object.fromEntries(
        BUNDLES.map((bundle) => [
            bundle,
            {
                lastUploaded: 0,
            },
        ]),
    ),

    rabbits: Object.fromEntries(
        RABBITS.map((rabbit) => [
            rabbit.key,
            {
                unlocked: false,
                palettes: {
                    adept: false,
                    challenger: false,
                    master: false,
                    spellbound: false,
                },
                rings: {
                    flower: false,
                    star: false,
                    lunar: false,
                },
            },
        ]),
    ),
});

const retrievedData = JSON.parse(localStorage.getItem('data-cache') ?? 'null') as ReturnType<typeof defaultData> | null;

const validatedData = !retrievedData || retrievedData.version !== VERSION ? defaultData() : retrievedData;

export const data = reactive(validatedData);

export const cacheData = () => localStorage.setItem('data-cache', JSON.stringify(data));

export const rabbitPercent = (cond: (rabbit: (typeof data)['rabbits'][string]) => boolean) => {
    const count = Object.values(data.rabbits).filter(cond).length;
    return Math.floor((count / RABBITS.length) * 100);
};

export const rabbitPercentAll = () => {
    let count = 0;
    for (const rabbit of Object.values(data.rabbits)) {
        if (rabbit.unlocked) count++;
        if (rabbit.palettes.adept) count++;
        if (rabbit.palettes.challenger) count++;
        if (rabbit.palettes.master) count++;
        if (rabbit.palettes.spellbound) count++;
        if (rabbit.rings.flower) count++;
        if (rabbit.rings.star) count++;
        if (rabbit.rings.lunar) count++;
    }
    return Math.floor((count / 8 / RABBITS.length) * 100);
};
