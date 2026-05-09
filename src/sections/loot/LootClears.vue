<script setup lang="ts">
import { Table, TableBody, TableCell, TableHead, TableRow } from '@/components/shadcn/table';
import { LOOT, LOOT_LIST, lootColors } from './loot';
import Tooltip from '@/components/custom/Tooltip.vue';
import { chunks, cn, uppercaseFirstLetter } from '@/lib/utils';
import { data } from '@/data';
import { AREAS } from '@/data/constants';
import { computed, ref } from 'vue';
import { lootFuse } from './percent';
import { Input } from '@/components/shadcn/input';
import { refDebounced } from '@vueuse/core';
import { Card, CardContent } from '@/components/shadcn/card';
import CardHeader from '@/components/shadcn/card/CardHeader.vue';
import CardTitle from '@/components/shadcn/card/CardTitle.vue';
import { ScrollText, Search, Telescope } from 'lucide-vue-next';
import Lock from '@/components/custom/Lock.vue';
import { Button } from '@/components/shadcn/button';

const color = AREAS.streets.color;

const colorInput = ref<keyof typeof lootColors>('all');

const isLootCleared = (lootKey: string) => data.loot[lootKey]!.cleared;

const sortedLootSets = computed(() =>
    LOOT.map((set) => ({
        ...set,
        score: set.loot.filter((loot) => isLootCleared(loot.key)).length,
    })).toSorted((a, b) => a.score - b.score),
);

const searchInput = ref('');
const debouncedSearchInput = refDebounced(searchInput, 500);

const searchResults = computed(() => {
    const sets = new Set();
    const loot = new Set();

    lootFuse
        .search(debouncedSearchInput.value)
        .filter(({ item }) => {
            if (colorInput.value === 'all') return true;
            const set = LOOT.find((set) => set.title === item.set); // TODO This is atrocious, replace with lookup during constant refactor
            return set?.color[colorInput.value];
        })
        .forEach(({ item }) => {
            sets.add(item.set);
            loot.add(item.key);
        });

    return { loot, sets };
});

const isLootSearched = (lootKey: string) =>
    searchResults.value.loot.size === 0 || searchResults.value.loot.has(lootKey);
const isSetSearched = (setTitle: string) =>
    searchResults.value.sets.size === 0 || searchResults.value.sets.has(setTitle);

const remainingLoot = computed(() =>
    Array.from(
        chunks(
            LOOT_LIST.filter((loot) => !isLootCleared(loot.key) && isLootSearched(loot.key)),
            8,
        ),
    ),
);
</script>

<template>
    <Card>
        <CardHeader>
            <CardTitle>
                <span class="flex flex-row items-center gap-5 text-nowrap font-normal text-lg">
                    <Search :style="{ color }" />
                    <h2>Search</h2>
                    <Input
                        type="text"
                        v-model="searchInput"
                        placeholder="Enter loot name... (or filter by Treasuresphere color below)"
                    />
                </span>
            </CardTitle>
        </CardHeader>
        <CardContent>
            <Table>
                <TableBody>
                    <TableRow>
                        <TableCell v-for="({ color }, title) in lootColors" :key="title">
                            <div class="flex justify-center items-center h-10 rounded-xl w-full">
                                <Button
                                    variant="secondary"
                                    size="default"
                                    :class="cn('hover:cursor-pointer hover:brightness-150 border-2 border-secondary')"
                                    :style="{
                                        color,
                                        borderColor: colorInput === title ? color : '',
                                    }"
                                    @click="colorInput = title"
                                >
                                    {{ uppercaseFirstLetter(title) }}
                                </Button>
                            </div>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </CardContent>
    </Card>
    <Card>
        <CardHeader>
            <CardTitle>
                <span class="flex flex-row items-center gap-5 text-nowrap font-normal text-lg">
                    <Telescope :style="{ color }" />
                    <h2>Missing Loot</h2>
                </span>
            </CardTitle>
        </CardHeader>
        <CardContent>
            <Table>
                <TableBody>
                    <TableRow v-for="(row, row_i) in remainingLoot" :key="row_i">
                        <TableCell v-for="loot in row" :key="loot.key">
                            <Tooltip :key="loot.key" :title="loot.title" class="flex justify-center items-center">
                                <div class="flex justify-center items-center h-10 rounded-xl w-full">
                                    <img loading="lazy" :src="loot.icon" :alt="loot.title" class="h-10 w-10" />
                                </div>
                            </Tooltip>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </CardContent>
    </Card>
    <Card>
        <CardHeader>
            <CardTitle>
                <span class="flex flex-row items-center gap-5 text-nowrap font-normal text-lg">
                    <ScrollText :style="{ color }" />
                    <h2>Loot Sets</h2>
                </span>
            </CardTitle>
        </CardHeader>
        <CardContent>
            <Table>
                <TableBody>
                    <TableRow v-for="lootSet in sortedLootSets" :key="lootSet.title">
                        <template v-if="isSetSearched(lootSet.title)">
                            <TableHead>
                                <h3 class="h-10 rounded-xl flex justify-center items-center">
                                    {{ lootSet.title }}
                                </h3>
                            </TableHead>
                            <TableCell v-for="loot in lootSet.loot" :key="loot.title">
                                <Tooltip :title="loot.title" class="flex justify-center items-center">
                                    <div
                                        :class="
                                            cn(
                                                'flex justify-center items-center h-10 w-10 rounded-xl',
                                                !isLootSearched(loot.key) && 'hidden',
                                            )
                                        "
                                    >
                                        <img
                                            loading="lazy"
                                            v-if="isLootCleared(loot.key)"
                                            :src="loot.icon"
                                            :alt="loot.title"
                                            class="h-10 w-10"
                                        />
                                        <Lock v-else :color="color" class="h-10 w-10" />
                                    </div>
                                </Tooltip>
                            </TableCell>
                        </template>
                    </TableRow>
                </TableBody>
            </Table>
        </CardContent>
    </Card>
</template>
