import { data } from '@/data';
import { Percent } from '@/lib/Percent';
import Fuse from 'fuse.js';
import { computed } from 'vue';
import { LOOT_LIST } from './loot';

export const lootClearPercent = computed(() => Percent.object(data.loot, (loot) => loot.cleared).labeled('loot'));

export const lootFuse = new Fuse(LOOT_LIST, {
    keys: ['title'],
    findAllMatches: true,
    threshold: 0.2,
});
