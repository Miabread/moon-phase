<script setup lang="ts">
import { AREAS } from '@/data/constants';
import { achievementsPercents, areaClearsPercent, otherSectionsAchievementPercent } from './percent';
import { CardContent, CardHeader, CardTitle, Card } from '@/components/shadcn/card';
import { BookHeart, LandPlot, Map } from 'lucide-vue-next';
import { ACHIEVEMENTS } from './achievements';
import PercentProgress from '@/components/custom/PercentProgress.vue';
import Achievement from './Achievement.vue';
import { NAVIGATION } from '../navigation/navigation';
import { Table, TableBody, TableCell, TableRow } from '@/components/shadcn/table';

const color = AREAS.darkhouse.color;

const otherSections = [
    {
        section: NAVIGATION[2]!,
        progress: achievementsPercents.rabbits,
    },
    {
        section: NAVIGATION[3]!,
        progress: achievementsPercents.trinkets,
    },
    {
        section: NAVIGATION[5]!,
        progress: achievementsPercents.music,
    },
];
</script>

<template>
    <div class="flex gap-4">
        <Card class="w-min">
            <CardHeader>
                <CardTitle>
                    <span class="flex flex-row items-center gap-5 text-nowrap font-normal text-lg">
                        <Map :style="{ color }" />
                        <h2>Other Sections</h2>
                        <PercentProgress :percent="otherSectionsAchievementPercent" :color="color" />
                    </span>
                </CardTitle>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableBody>
                        <TableRow
                            v-for="{ section, progress } in otherSections"
                            :key="section.title"
                            class="text-center"
                        >
                            <TableCell> Your </TableCell>
                            <TableCell>
                                <span :style="{ color: section.color }">{{ section.title }}</span>
                            </TableCell>
                            <TableCell> are contributing </TableCell>
                            <TableCell>
                                <span :style="{ color: section.color }">
                                    {{ progress.current }}
                                </span>
                            </TableCell>
                            <TableCell>out of </TableCell>
                            <TableCell>
                                <span :style="{ color: section.color }">
                                    {{ progress.total }}
                                </span>
                            </TableCell>
                            <TableCell>to your</TableCell>
                            <TableCell>
                                <span :style="{ color }">Achievements</span>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
        <Card class="w-full">
            <CardHeader>
                <CardTitle>
                    <span class="flex flex-row items-center gap-5 text-nowrap font-normal text-lg">
                        <BookHeart :style="{ color }" />
                        <h2>Story</h2>
                        <PercentProgress :percent="achievementsPercents.story" :color="color" />
                    </span>
                </CardTitle>
            </CardHeader>
            <CardContent class="flex items-center justify-around flex-wrap w-full h-full">
                <Achievement v-for="ach in ACHIEVEMENTS.story" :key="ach.title" :data="ach" :color="color" />
            </CardContent>
        </Card>
    </div>
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
            <div class="flex justify-around"></div>
        </CardContent>
    </Card>
</template>
