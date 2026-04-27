<script setup lang="ts">
import Lock from '@/components/custom/Lock.vue';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/shadcn/table';
import { data } from '@/data';
import { DEFAULT_RABBITS, RABBITS } from '@/sections/rabbits/rabbits';
import Tooltip from '@/components/custom/Tooltip.vue';
import { ROWS } from './table';
import { rabbitClearPercentsByRabbit } from './percent';
import { AREAS } from '@/data/constants';

const color = AREAS.arsenal.color;
</script>

<template>
    <Table>
        <TableHeader>
            <TableRow>
                <!-- Empty cell for corner -->
                <TableHead />

                <TableHead v-for="(rabbit, i) of RABBITS" :key="rabbit.key">
                    <div class="flex justify-center items-center w-full">
                        <Tooltip
                            :title="`${rabbit.name} Rabbit`"
                            :content="`${rabbitClearPercentsByRabbit[i]!.current} / ${rabbitClearPercentsByRabbit[i]!.total} ${rabbit.name} clears`"
                        >
                            <img loading="lazy" :src="rabbit.icon" :alt="rabbit.name" class="h-10 w-10" />
                        </Tooltip>
                    </div>
                </TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
            <TableRow v-for="row of ROWS" :key="row.title">
                <TableHead>
                    <div class="flex justify-center items-center w-full">
                        <Tooltip
                            :title="row.title"
                            :content="`${row.progress.value.current} / ${row.progress.value.total} clears`"
                        >
                            <img loading="lazy" :src="row.icon" :alt="row.title" class="h-10 w-10" />
                        </Tooltip>
                    </div>
                </TableHead>

                <!-- And now one for each rabbit -->
                <TableCell v-for="(rabbit, i) of RABBITS" :key="rabbit.key">
                    <Tooltip :title="`${rabbit.name} ${row.title}`" :content="row.condition ?? RABBITS[i]!.unlockText">
                        <div class="flex justify-center items-center w-full">
                            <Lock
                                :unlocked="row.checked(data.rabbits[rabbit.key]!)"
                                :always-unlocked="row.condition === null && DEFAULT_RABBITS.includes(rabbit.key)"
                                :color="color"
                            />
                        </div>
                    </Tooltip>
                </TableCell>
            </TableRow>
        </TableBody>
    </Table>
</template>
