import { Percent } from '@/lib/Percent';
import { computed } from 'vue';

export const lootClearPercent = computed(() => new Percent(0, 35 * 8).labeled('loot'));
