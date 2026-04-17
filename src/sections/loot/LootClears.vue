<script setup lang="ts">
import { Table, TableBody, TableCell, TableHead, TableRow } from '@/components/shadcn/table';
import { LOOT } from './loot';
import Tooltip from '@/components/custom/Tooltip.vue';
import { cn } from '@/lib/utils';
import { data } from '@/data';
import { AREAS } from '@/data/constants';
import { computed, ref } from 'vue';
import { lootFuse } from './percent';
import { Input } from '@/components/shadcn/input';
import { refDebounced } from '@vueuse/core';

const color = AREAS.streets.color;

const sortedLOOT = computed(() =>
    LOOT.map((set) => ({
        ...set,
        score: set.loot.filter((loot) => data.loot[loot.key]!.cleared).length,
    })).toSorted((a, b) => a.score - b.score),
);

const searchInput = ref('');
const debouncedSearchInput = refDebounced(searchInput, 500);

const searchResults = computed(() => {
    if (debouncedSearchInput.value.trim().length === 0) return { loot: new Set(), sets: new Set() };

    const sets = new Set();
    const loot = new Set(
        lootFuse.search(debouncedSearchInput.value).map((loot) => {
            sets.add(loot.item.set);
            return loot.item.key;
        }),
    );

    return { loot, sets };
});

const isLootCleared = (lootKey: string) => data.loot[lootKey]!.cleared;
const isLootSearched = (lootKey: string) =>
    searchResults.value.loot.size === 0 || searchResults.value.loot.has(lootKey);
const isSetSearched = (setTitle: string) =>
    searchResults.value.sets.size === 0 || searchResults.value.sets.has(setTitle);
</script>

<template>
    <Input type="text" v-model="searchInput" />
    <Table>
        <TableBody>
            <TableRow v-for="lootSet in sortedLOOT" :key="lootSet.title">
                <template v-if="isSetSearched(lootSet.title)">
                    <TableHead>
                        <h3
                            class="h-10 rounded-xl flex justify-center items-center"
                            :style="{
                                backgroundColor: lootSet.score >= 8 ? '' : `color-mix(in srgb, ${color}, black 60%)`,
                            }"
                        >
                            {{ lootSet.title }}
                        </h3>
                    </TableHead>
                    <TableCell v-for="loot in lootSet.loot" :key="loot.title">
                        <Tooltip :title="loot.title" class="flex justify-center items-center">
                            <div
                                class="flex justify-center items-center h-10 w-10 rounded-xl"
                                :style="{
                                    backgroundColor:
                                        isLootSearched(loot.key) && !isLootCleared(loot.key)
                                            ? `color-mix(in srgb, ${color}, black 60%)`
                                            : '',
                                }"
                            >
                                <img
                                    :src="loot.icon"
                                    :alt="loot.title"
                                    :class="
                                        cn(
                                            !isLootCleared(loot.key) && 'grayscale',
                                            !isLootSearched(loot.key) && 'hidden',
                                        )
                                    "
                                />
                            </div>
                        </Tooltip>
                    </TableCell>
                </template>
            </TableRow>
        </TableBody>
    </Table>
</template>
