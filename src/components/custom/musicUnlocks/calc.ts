import { data } from '@/data';
import { Percent } from '@/lib/Percent';
import { computed } from 'vue';

export const musicUnlockPercent = computed(() => Percent.count(data.music, (m) => m.unlocked).labeled('tracks'));
