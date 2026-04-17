import { data } from '@/data';
import { Percent } from '@/lib/Percent';
import { computed } from 'vue';

export const lootClearPercent = computed(() => Percent.object(data.loot, (loot) => loot.cleared).labeled('loot'));
