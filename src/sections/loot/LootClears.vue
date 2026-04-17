<script setup lang="ts">
import { Table, TableBody, TableCell, TableHead, TableRow } from '@/components/shadcn/table';
import { LOOT } from './loot';
import Tooltip from '@/components/custom/Tooltip.vue';
import { cn } from '@/lib/utils';
import { data } from '@/data';
import { AREAS } from '@/data/constants';

const color = AREAS.streets.color;
</script>

<template>
    <Table>
        <TableBody>
            <TableRow v-for="lootSet in LOOT" :key="lootSet.title">
                <TableHead>
                    {{ lootSet.title }}
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
