<script setup lang="ts">
import { AREAS } from '@/data/constants';
import { achievementsPercents, areaClearsPercent } from './percent';
import { CardContent, CardHeader, CardTitle, Card } from '@/components/shadcn/card';
import { BookHeart, LandPlot } from 'lucide-vue-next';
import { ACHIEVEMENTS } from './achievements';
import PercentProgress from '@/components/custom/PercentProgress.vue';
import Achievement from './Achievement.vue';

const color = AREAS.darkhouse.color;
</script>

<template>
    <Card>
        <CardHeader>
            <CardTitle>
                <span class="flex flex-row items-center gap-5 text-nowrap font-normal text-lg">
                    <BookHeart :style="{ color }" />
                    <h2>Story</h2>
                    <PercentProgress :percent="achievementsPercents.story" :color="color" />
                </span>
            </CardTitle>
        </CardHeader>
        <CardContent>
            <div class="flex justify-around">
                <Achievement v-for="ach in ACHIEVEMENTS.story" :key="ach.title" :data="ach" :color="color" />
            </div>
        </CardContent>
    </Card>
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
