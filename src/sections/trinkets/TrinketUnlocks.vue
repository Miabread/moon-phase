<script setup lang="ts">
import Lock from '@/components/custom/Lock.vue';
import PercentProgress from '@/components/custom/PercentProgress.vue';
import Tooltip from '@/components/custom/Tooltip.vue';
import Table from '@/components/shadcn/table/Table.vue';
import TableBody from '@/components/shadcn/table/TableBody.vue';
import TableCell from '@/components/shadcn/table/TableCell.vue';
import TableRow from '@/components/shadcn/table/TableRow.vue';
import { TRINKETS_PAGES } from '@/sections/trinkets/trinkets';
import { data } from '@/data';
import { trinketUnlockPercents } from './percent';
import { AREAS } from '@/data/constants';
import { Dice1, Dice2, Dice3 } from 'lucide-vue-next';
import { CardContent, CardHeader, CardTitle, Card } from '@/components/shadcn/card';

const color = AREAS.nest.color;

const pageIcons = [Dice1, Dice2, Dice3];
</script>

<template>
    <Card v-for="(page, page_i) in TRINKETS_PAGES" :key="page_i" class="mt-5">
        <CardHeader>
            <CardTitle>
                <span class="flex flex-row items-center gap-5 text-nowrap font-normal text-lg">
                    <component :is="pageIcons[page_i]" :style="{ color }" />
                    <h2>Page {{ page_i + 1 }}</h2>
                    <PercentProgress :percent="trinketUnlockPercents[page_i]!" :color="color" />
                </span>
            </CardTitle>
        </CardHeader>
        <CardContent class="flex flex-col gap-4">
            <Table>
                <TableBody>
                    <TableRow v-for="(row, row_i) in page" :key="row_i">
                        <TableCell v-for="(trinket, col_i) in row" :key="col_i">
                            <Tooltip v-if="trinket" :title="trinket.title" :content="trinket.condition">
                                <div class="flex justify-center items-center w-full">
                                    <Lock
                                        v-if="trinket.key === 'nothing'"
                                        :color="color"
                                        class="h-10 w-10"
                                        always-unlocked
                                    />
                                    <div
                                        class="flex justify-center items-center h-10 w-10"
                                        v-else-if="data.trinkets[trinket.key]!.unlocked"
                                    >
                                        <img loading="lazy" :src="trinket.icon" :alt="trinket.title" class="w-full" />
                                    </div>
                                    <Lock v-else :color="color" class="h-10 w-10" />
                                </div>
                            </Tooltip>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </CardContent>
    </Card>
</template>
