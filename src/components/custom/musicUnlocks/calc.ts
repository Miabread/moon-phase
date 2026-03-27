import { MUSIC } from '@/constants/music';
import { data } from '@/data';
import { computed } from 'vue';

export const musicUnlockPercent = computed(() => {
    const count = Object.values(data.music).filter((m) => m.unlocked).length;
    return Math.floor((count / MUSIC.length) * 100);
});
