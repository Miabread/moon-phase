<script setup lang="ts">
import { AREAS, DIFFICULTIES } from '@/data/constants';
import { achievementsPercents, areaClearsPercent, areaClearsPercentsByArea } from './percent';
import { CardContent, CardHeader, CardTitle, Card } from '@/components/shadcn/card';
import { LandPlot } from 'lucide-vue-next';
import { ACHIEVEMENTS } from './achievements';
import PercentProgress from '@/components/custom/PercentProgress.vue';
import Achievement from './Achievement.vue';
import { Table, TableBody, TableHeader, TableRow, TableHead, TableCell } from '@/components/shadcn/table';
import Tooltip from '@/components/custom/Tooltip.vue';

const color = AREAS.darkhouse.color;

const areaClearsTable = [
    {
        difficulty: DIFFICULTIES.normal,
        achievements: ACHIEVEMENTS.areasNormal,
        progress: achievementsPercents.areasNormal,
    },
    {
        difficulty: DIFFICULTIES.hard,
        achievements: ACHIEVEMENTS.areasHard,
        progress: achievementsPercents.areasHard,
    },
    {
        difficulty: DIFFICULTIES.lunar,
        achievements: ACHIEVEMENTS.areasLunar,
        progress: achievementsPercents.areasLunar,
    },
];
</script>

<template>
    <Card>
        <CardHeader>
            <CardTitle>
                <span class="flex flex-row items-center gap-5 text-nowrap font-normal text-lg">
                    <LandPlot :style="{ color }" />
                    <h2>Area Clears</h2>
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

                        <template v-for="(area, i) of Object.values(AREAS)" :key="area.title">
                            <TableHead v-if="area.hasAchievements">
                                <div class="flex justify-center items-center">
                                    <Tooltip
                                        :title="area.title"
                                        :content="`${areaClearsPercentsByArea[i]!.current} / ${areaClearsPercentsByArea[i]!.total} clears`"
                                    >
                                        <img loading="lazy" :src="area.icon" :alt="area.title" class="h-10 w-10" />
                                    </Tooltip>
                                </div>
                            </TableHead>
                        </template>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow v-for="row in areaClearsTable" :key="row.difficulty.title">
                        <TableHead>
                            <div class="flex justify-center items-center">
                                <Tooltip
                                    :title="row.difficulty.title"
                                    :content="`${row.progress.value.current} / ${row.progress.value.total} clears`"
                                >
                                    <img
                                        loading="lazy"
                                        :src="row.difficulty.icon"
                                        :alt="row.difficulty.title"
                                        class="h-7 w-7"
                                    />
                                </Tooltip>
                            </div>
                        </TableHead>
                        <TableCell v-for="ach in row.achievements" :key="ach.title">
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
