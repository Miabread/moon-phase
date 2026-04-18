<script setup lang="ts">
import { AREAS } from '@/data/constants';
import { achievementsPercents, areaClearsPercent } from './percent';
import { CardContent, CardHeader, CardTitle, Card } from '@/components/shadcn/card';
import { BookHeart, LandPlot, Music, ScanHeart } from 'lucide-vue-next';
import { ACHIEVEMENTS } from './achievements';
import PercentProgress from '@/components/custom/PercentProgress.vue';
import Achievement from './Achievement.vue';
import EasterEgg from '@/components/custom/EasterEgg.vue';

const color = AREAS.darkhouse.color;
</script>

<template>
    <div class="flex gap-4">
        <Card class="w-1/2">
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
                Work in Progress
                <!-- <Achievement v-for="ach in ACHIEVEMENTS.story" :key="ach.title" :data="ach" :color="color" /> -->
            </CardContent>
        </Card>
        <Card class="w-1/2">
            <CardHeader>
                <CardTitle>
                    <span class="flex flex-row items-center gap-5 text-nowrap font-normal text-lg">
                        <EasterEgg :style="{ color }" />
                        <h2>Rabbit Clears</h2>
                        <PercentProgress :percent="achievementsPercents.rabbits" :color="color" />
                    </span>
                </CardTitle>
            </CardHeader>
            <CardContent class="flex items-center justify-around flex-wrap w-full h-full">
                <Achievement v-for="ach in ACHIEVEMENTS.rabbits" :key="ach.title" :data="ach" :color="color" />
            </CardContent>
        </Card>
    </div>
    <div class="flex gap-4">
        <Card class="w-1/2">
            <CardHeader>
                <CardTitle>
                    <span class="flex flex-row items-center gap-5 text-nowrap font-normal text-lg">
                        <ScanHeart :style="{ color }" />
                        <h2>Trinket Unlocks</h2>
                        <PercentProgress :percent="achievementsPercents.trinkets" :color="color" />
                    </span>
                </CardTitle>
            </CardHeader>
            <CardContent class="flex items-center justify-around flex-wrap w-full h-full">
                <Achievement v-for="ach in ACHIEVEMENTS.trinkets" :key="ach.title" :data="ach" :color="color" />
            </CardContent>
        </Card>
        <Card class="w-1/2">
            <CardHeader>
                <CardTitle>
                    <span class="flex flex-row items-center gap-5 text-nowrap font-normal text-lg">
                        <Music :style="{ color }" />
                        <h2>Music Unlocks</h2>
                        <PercentProgress :percent="achievementsPercents.music" :color="color" />
                    </span>
                </CardTitle>
            </CardHeader>
            <CardContent class="flex items-center justify-around flex-wrap w-full h-full">
                <Achievement v-for="ach in ACHIEVEMENTS.music" :key="ach.title" :data="ach" :color="color" />
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
        <CardContent class="flex items-center justify-around"> Work in Progress </CardContent>
    </Card>
</template>
