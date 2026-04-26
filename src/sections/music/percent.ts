import { data } from '@/data';
import { Percent } from '@/lib/Percent';
import { computed } from 'vue';
import { MUSIC_OBJECT } from './music';

export const musicUnlockPercents = {
    kingdom: computed(() =>
        Percent.object(data.music, (m, key) => (MUSIC_OBJECT[key]!.album === 'kingdom' ? m.unlocked : null)).labeled(
            'tracks',
        ),
    ),
    extra: computed(() =>
        Percent.object(data.music, (m, key) => (MUSIC_OBJECT[key]!.album === 'extra' ? m.unlocked : null)).labeled(
            'tracks',
        ),
    ),
};

export const musicUnlockPercent = computed(() =>
    Percent.compound([musicUnlockPercents.kingdom, musicUnlockPercents.extra]).labeled('tracks'),
);
