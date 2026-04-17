<script setup lang="ts">
import { AREAS } from '@/data/constants';
import { unaccountedForAchievements } from './percent';
import { CardContent, CardHeader, CardTitle, Card } from '@/components/shadcn/card';
import { Hammer } from 'lucide-vue-next';

const color = AREAS.darkhouse.color;
</script>

<template>
    <Card>
        <CardHeader>
            <CardTitle>
                <span class="flex flex-row items-center gap-5 text-nowrap font-normal text-lg">
                    <Hammer :style="{ color }" />
                    <h2>Work In Progress Status</h2>
                </span>
            </CardTitle>
        </CardHeader>
        <CardContent>
            <p class="text-center">
                There are currently
                <span :style="{ color }" class="text-lg">{{ unaccountedForAchievements }} Achievements</span> that have
                not been implemented yet.
            </p>
        </CardContent>
    </Card>
</template>
