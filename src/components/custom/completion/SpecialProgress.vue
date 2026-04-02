<script setup lang="ts">
import { Progress } from '@/components/shadcn/progress';
import { totalCompletion } from './calc';
import { Archive, Crown, Handbag, Swords } from 'lucide-vue-next';
import { NAVIGATION } from '@/constants/navigation';
import { Card } from '@/components/shadcn/card';

const icons = [Handbag, Swords, Swords, Swords, Archive, Crown];

const color = NAVIGATION[0]!.color;
</script>

<template>
    <Card class="grid grid-cols-1 grid-rows-1 p-1 w-full">
        <div class="col-start-1 row-start-1 flex items-center justify-center">
            <Progress :model-value="totalCompletion.percent" :color="color" />
        </div>
        <div class="col-start-1 row-start-1 flex justify-between z-10">
            <div v-for="(icon, i) in icons" :key="i" class="bg-card w-10 h-10 flex items-center justify-center">
                <component v-if="totalCompletion.percent > i * 20" :style="{ color }" :is="icon" />
                <!-- Manual color to match with the <Progress/> bar, because it uses transparency to compute it's color which fucks with the icons -->
                <component v-else class="text-[#404040]" :is="icon" />
            </div>
        </div>
    </Card>
</template>
