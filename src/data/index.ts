import { reactive, watchEffect } from 'vue';
import { AREAS, BUNDLES } from '@/data/constants';
import { MUSIC } from '@/sections/music/music';
import { TRINKETS_LIST } from '@/sections/trinkets/trinkets';
import { RABBITS } from '@/sections/rabbits/rabbits';
import { LOOT_LIST } from '@/sections/loot/loot';
import { STORY } from '@/sections/achievements/achievements';

export { loadSavedata } from './loadSavedata';
export { loadUnlockdata } from './loadUnlockdata';

const INCREMENT_EVERY_TIME_DEFAULT_DATA_CHANGES = 4;

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

    story: Object.fromEntries(STORY.map((story) => [story.key, { flag: 0 }])),

    areas: Object.fromEntries(
        Object.keys(AREAS).map((key) => [
            key,
            { cuteClear: false, normalClear: false, hardClear: false, lunarClear: false },
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

    loot: Object.fromEntries(
        LOOT_LIST.map((loot) => [
            loot.key,
            {
                cleared: false,
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
