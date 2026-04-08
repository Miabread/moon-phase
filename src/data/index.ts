import { reactive, watchEffect } from 'vue';
import { BUNDLES } from '@/data/constants';
import { MUSIC } from '@/layout/musicUnlocks/music';
import { TRINKETS_LIST } from '@/layout/trinketUnlocks/trinkets';
import { RABBITS } from '@/layout/rabbitClears/rabbits';

export { loadSavedata } from './loadSavedata';
export { loadUnlockdata } from './loadUnlockdata';

const INCREMENT_EVERY_TIME_DEFAULT_DATA_CHANGES = 0;

const LOCAL_STORAGE_KEY = 'data-cache';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
(window as any).dev = {
    reset() {
        localStorage.removeItem(LOCAL_STORAGE_KEY);
        location.reload();
    },
};

const defaultData = () => ({
    increment: INCREMENT_EVERY_TIME_DEFAULT_DATA_CHANGES,

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

    trinkets: Object.fromEntries(
        TRINKETS_LIST.map((trinket) => [
            trinket.key,
            {
                unlocked: false,
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

const validatedData =
    !retrievedData || retrievedData.increment !== INCREMENT_EVERY_TIME_DEFAULT_DATA_CHANGES
        ? defaultData()
        : retrievedData;

export const data = reactive(validatedData);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
(window as any).dev.data = data;

watchEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
});

export const resetData = () => {
    Object.assign(data, defaultData());
};
