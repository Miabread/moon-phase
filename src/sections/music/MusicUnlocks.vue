<script setup lang="ts">
import { Table, TableRow, TableBody, TableCell } from '@/components/shadcn/table';
import { MUSIC } from '@/sections/music/music';
import Lock from '@/components/custom/Lock.vue';
import { data } from '@/data';
import { computed } from 'vue';
import { AREAS } from '@/data/constants';
import { ACHIEVEMENTS } from '@/sections/achievements/achievements';
import Achievement from '@/sections/achievements/Achievement.vue';

const sortedMUSIC = computed(() =>
    MUSIC.slice().sort((a, b) => Number(data.music[a.key]!.unlocked) - Number(data.music[b.key]!.unlocked)),
);

const color = AREAS.lakeside.color;
</script>

<template>
    <div class="flex justify-around">
        <Achievement v-for="ach in ACHIEVEMENTS.music" :key="ach.title" :data="ach" :color="color" />
    </div>
    <hr />
    <Table>
        <TableBody>
            <TableRow v-for="music in sortedMUSIC" :key="music.key">
                <TableCell>
                    <div class="flex justify-center items-center">
                        <img :src="music.icon" class="h-10 w-10" />
                    </div>
                </TableCell>
                <TableCell>{{ music.title }}</TableCell>
                <TableCell><Lock :unlocked="data.music[music.key]!.unlocked" :color="color" /></TableCell>
                <TableCell>{{ music.condition }}</TableCell>
            </TableRow>
        </TableBody>
    </Table>
</template>
