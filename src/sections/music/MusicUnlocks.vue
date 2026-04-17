<script setup lang="ts">
import { Table, TableRow, TableBody, TableCell } from '@/components/shadcn/table';
import { MUSIC } from '@/sections/music/music';
import Lock from '@/components/custom/Lock.vue';
import { data } from '@/data';
import { computed } from 'vue';
import { AREAS } from '@/data/constants';
import { ACHIEVEMENTS } from '@/sections/achievements/achievements';
import Achievement from '@/sections/achievements/Achievement.vue';
import { CardContent, CardHeader, CardTitle, Card } from '@/components/shadcn/card';
import { ListMusic, Trophy } from 'lucide-vue-next';
import { achievementsPercents } from '../achievements/percent';
import PercentProgress from '@/components/custom/PercentProgress.vue';

const sortedMusic = computed(() =>
    MUSIC.toSorted((a, b) => Number(data.music[a.key]!.unlocked) - Number(data.music[b.key]!.unlocked)),
);

const color = AREAS.lakeside.color;
</script>

<template>
    <Card>
        <CardHeader>
            <CardTitle>
                <span class="flex flex-row items-center gap-5 text-nowrap font-normal text-lg">
                    <Trophy :style="{ color }" />
                    <h2>Achievements</h2>
                    <PercentProgress :percent="achievementsPercents.music" :color="color" />
                </span>
            </CardTitle>
        </CardHeader>
        <CardContent>
            <div class="flex justify-around">
                <Achievement v-for="ach in ACHIEVEMENTS.music" :key="ach.title" :data="ach" :color="color" />
            </div>
        </CardContent>
    </Card>

    <Card>
        <CardHeader>
            <CardTitle>
                <span class="flex flex-row items-center gap-5 text-nowrap font-normal text-lg">
                    <ListMusic :style="{ color }" />
                    <h2>By Track</h2>
                </span>
            </CardTitle>
        </CardHeader>
        <CardContent>
            <Table>
                <TableBody>
                    <TableRow v-for="music in sortedMusic" :key="music.key">
                        <TableCell>
                            <div class="flex justify-center items-center">
                                <img loading="lazy" :src="music.icon" class="h-10 w-10" />
                            </div>
                        </TableCell>
                        <TableCell>{{ music.title }}</TableCell>
                        <TableCell><Lock :unlocked="data.music[music.key]!.unlocked" :color="color" /></TableCell>
                        <TableCell>{{ music.condition }}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </CardContent>
    </Card>
</template>
