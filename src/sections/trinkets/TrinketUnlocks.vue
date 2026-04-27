<script setup lang="ts">
import { AREAS } from '@/data/constants';
import TrinketPage from './TrinketPage.vue';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/shadcn/card';
import { Star } from 'lucide-vue-next';
import { altLevitationRingPercent } from './percent';
import PercentProgress from '@/components/custom/PercentProgress.vue';
import Lock from '@/components/custom/Lock.vue';
import { data } from '@/data';
import { Table, TableBody, TableCell, TableRow } from '@/components/shadcn/table';
import Tooltip from '@/components/custom/Tooltip.vue';

const color = AREAS.nest.color;

const magiLockTable = [
    { name: 'Dodeca', color: AREAS.darkhouse.color },
    { name: 'Octa', color: AREAS.arsenal.color },
    { name: 'Hexa', color: AREAS.nest.color },
    { name: 'Tetra', color: AREAS.streets.color },
    { name: 'Icosa', color: AREAS.lakeside.color },
];
</script>

<template>
    <TrinketPage :page_i="0" />
    <TrinketPage :page_i="1" />
    <div class="gap-4 grid grid-cols-2">
        <TrinketPage :page_i="2" />
        <Card>
            <CardHeader>
                <CardTitle>
                    <span class="flex flex-row items-center gap-5 text-nowrap font-normal text-lg">
                        <Star :style="{ color }" />
                        <h2>Alt Levitation Ring</h2>
                        <PercentProgress :percent="altLevitationRingPercent" :color="color" />
                    </span>
                </CardTitle>
            </CardHeader>
            <CardContent class="flex justify-center items-center w-full">
                <Table>
                    <TableBody>
                        <TableRow>
                            <TableCell v-for="(lock, i) in magiLockTable" :key="i">
                                <div class="flex justify-center items-center w-full">
                                    <Tooltip
                                        :title="`Magilock ${lock.name} Clear`"
                                        :content="`Win a True Random or Chaotic Random run while having Magilock ${lock.name} equipped.`"
                                    >
                                        <Lock :unlocked="data.altLevitationRing[i]" :color="lock.color" />
                                    </Tooltip>
                                </div>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    </div>
</template>
