<script setup lang="ts">
import { AREAS, DIFFICULTIES } from '@/data/constants';
import { areaClearsPercent } from './percent';
import { CardContent, CardHeader, CardTitle, Card } from '@/components/shadcn/card';
import { LandPlot } from 'lucide-vue-next';
import { ACHIEVEMENTS } from './achievements';
import PercentProgress from '@/components/custom/PercentProgress.vue';
import Achievement from './Achievement.vue';
import { Table, TableBody, TableHeader, TableRow, TableHead, TableCell } from '@/components/shadcn/table';
import Tooltip from '@/components/custom/Tooltip.vue';

const color = AREAS.darkhouse.color;
</script>

<template>
    <Card>
        <CardHeader>
            <CardTitle>
                <span class="flex flex-row items-center gap-5 text-nowrap font-normal text-lg">
                    <LandPlot :style="{ color }" />
                    <h2 class="italic">Work in Progress</h2>
                    <PercentProgress :percent="areaClearsPercent" :color="color" />
                </span>
            </CardTitle>
        </CardHeader>
        <CardContent>
            <Table>
                <TableHeader>
                    <TableRow>
                        <!-- Empty cell for corner -->
                        <TableHead />

                        <template v-for="(area, i) of AREAS" :key="i">
                            <TableHead v-if="area.hasAchivements">
                                <div class="flex justify-center items-center">
                                    <Tooltip :title="area.title">
                                        <img loading="lazy" :src="area.icon" :alt="area.title" class="h-10 w-10" />
                                    </Tooltip>
                                </div>
                            </TableHead>
                        </template>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableHead>
                            <div class="flex justify-center items-center">
                                <Tooltip title="Normal">
                                    <img loading="lazy" :src="DIFFICULTIES.normal.icon" alt="Normal" class="h-5 w-5" />
                                </Tooltip>
                            </div>
                        </TableHead>
                        <TableCell v-for="ach in ACHIEVEMENTS.areasNormal" :key="ach.title">
                            <div class="flex justify-center items-center">
                                <Achievement :data="ach" :color="color" />
                            </div>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableHead>
                            <div class="flex justify-center items-center">
                                <Tooltip title="Hard">
                                    <img loading="lazy" :src="DIFFICULTIES.hard.icon" alt="Hard" class="h-5 w-5" />
                                </Tooltip>
                            </div>
                        </TableHead>
                        <TableCell v-for="ach in ACHIEVEMENTS.areasHard" :key="ach.title">
                            <div class="flex justify-center items-center">
                                <Achievement :data="ach" :color="color" />
                            </div>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableHead>
                            <div class="flex justify-center items-center">
                                <Tooltip title="Lunar">
                                    <img loading="lazy" :src="DIFFICULTIES.lunar.icon" alt="Lunar" class="h-5 w-5" />
                                </Tooltip>
                            </div>
                        </TableHead>
                        <TableCell v-for="ach in ACHIEVEMENTS.areasLunar" :key="ach.title">
                            <div class="flex justify-center items-center">
                                <Achievement :data="ach" :color="color" />
                            </div>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </CardContent>
    </Card>
</template>
