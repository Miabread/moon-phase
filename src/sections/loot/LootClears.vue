<script setup lang="ts">
import { Table, TableBody, TableCell, TableHead, TableRow } from '@/components/shadcn/table';
import { LOOT } from './loot';
import Tooltip from '@/components/custom/Tooltip.vue';
import { cn } from '@/lib/utils';
import { data } from '@/data';
import { AREAS } from '@/data/constants';
import { computed } from 'vue';

const color = AREAS.streets.color;

const sortedLOOT = computed(() =>
    LOOT.map((set) => ({
        ...set,
        score: set.loot.filter((loot) => data.loot[loot.key]!.cleared).length,
    })).toSorted((a, b) => a.score - b.score),
);
</script>

<template>
    <Table>
        <TableBody>
            <TableRow v-for="lootSet in sortedLOOT" :key="lootSet.title">
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
                                backgroundColor: data.loot[loot.key]!.cleared
                                    ? ''
                                    : `color-mix(in srgb, ${color}, black 60%)`,
                            }"
                        >
                            <img
                                :src="loot.icon"
                                :alt="loot.title"
                                :class="cn(!data.loot[loot.key]!.cleared && 'grayscale')"
                            />
                        </div>
                    </Tooltip>
                </TableCell>
            </TableRow>
        </TableBody>
    </Table>
</template>
