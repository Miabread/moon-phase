import { reactive, watchEffect } from 'vue';
import { BUNDLES, RABBITS, VERSION } from '../constants';
import { MUSIC } from '@/constants/music';

export { loadSavedata } from './loadSavedata';
export { loadUnlockdata } from './loadUnlockdata';

const LOCAL_STORAGE_KEY = 'data-cache';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
(window as any).dev = {
    reset() {
        localStorage.removeItem(LOCAL_STORAGE_KEY);
        location.reload();
    },
};

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

const retrievedData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) ?? 'null') as ReturnType<
    typeof defaultData
> | null;

const validatedData = !retrievedData || retrievedData.version !== VERSION ? defaultData() : retrievedData;

export const data = reactive(validatedData);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
(window as any).dev.data = data;

watchEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
});

export const resetData = () => {
    Object.assign(data, defaultData());
};
