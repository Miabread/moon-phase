import { data } from '@/data';
import { Percent } from '@/lib/Percent';
import { computed } from 'vue';

// TODO
export const musicUnlockPercents = {
    kingdom: computed(() => Percent.object(data.music, (m) => m.unlocked).labeled('tracks')),
    extra: computed(() => Percent.object(data.music, (m) => m.unlocked).labeled('tracks')),
};

export const musicUnlockPercent = computed(() =>
    Percent.compound([musicUnlockPercents.kingdom, musicUnlockPercents.extra]).labeled('tracks'),
);
