import { Percent } from '@/lib/Percent';
import { computed } from 'vue';

export const achievementsPercent = computed(() => new Percent(0, 54).labeled('achievements'));
