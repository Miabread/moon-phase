<script setup lang="ts">
import { totalCompletion } from './percent';
import { Archive, Crown, Handbag, Swords } from 'lucide-vue-next';
import { Card } from '@/components/shadcn/card';
import PercentProgress from '@/components/custom/PercentProgress.vue';
import { AREAS } from '@/data/constants';
import Tooltip from '@/components/custom/Tooltip.vue';

const icons = [Handbag, Swords, Swords, Swords, Archive, Crown];

const color = AREAS.keep.color;
</script>

<template>
    <Tooltip
        :title="`${totalCompletion.percent.toFixed(2)}%`"
        :content="`${totalCompletion.current} / ${totalCompletion.total} ${totalCompletion.label}`"
    >
        <Card class="grid grid-cols-1 grid-rows-1 p-1 w-full">
            <div class="col-start-1 row-start-1 flex items-center justify-center">
                <PercentProgress :percent="totalCompletion" :color="color" />
            </div>
            <div class="col-start-1 row-start-1 flex justify-between z-10">
                <div v-for="(icon, i) in icons" :key="i" class="bg-card w-10 h-10 flex items-center justify-center">
                    <component v-if="totalCompletion.percent > i * 20" :style="{ color }" :is="icon" />
                    <!-- Manual color to match with the <Progress/> bar, because it uses transparency to compute it's color which fucks with the icons -->
                    <component v-else :style="`color: color-mix(in srgb, ${color}, black 60%)`" :is="icon" />
                </div>
            </div>
        </Card>
    </Tooltip>
</template>
