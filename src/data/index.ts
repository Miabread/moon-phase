import { reactive } from 'vue';
import { BUNDLES, RABBITS, VERSION } from '../constants';
import { MUSIC } from '@/constants/music';

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

    music: Object.fromEntries(
        MUSIC.map((music) => [
            music.key,
            {
                unlocked: false,
            },
        ]),
    ),
});

const retrievedData = JSON.parse(localStorage.getItem('data-cache') ?? 'null') as ReturnType<typeof defaultData> | null;

const validatedData = !retrievedData || retrievedData.version !== VERSION ? defaultData() : retrievedData;

export const data = reactive(validatedData);

export const cacheData = () => localStorage.setItem('data-cache', JSON.stringify(data));
