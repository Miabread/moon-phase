<script setup lang="ts">
import { Table, TableRow, TableBody, TableCell } from '@/components/shadcn/table';
import { MUSIC } from '@/sections/music/music';
import Lock from '@/components/custom/Lock.vue';
import { data } from '@/data';
import { computed } from 'vue';
import { AREAS } from '@/data/constants';
import Tooltip from '@/components/custom/Tooltip.vue';

const sortedMusic = computed(() =>
    MUSIC.toSorted((a, b) => Number(data.music[a.key]!.unlocked) - Number(data.music[b.key]!.unlocked)),
);

const color = AREAS.lakeside.color;
</script>

<template>
    <Table>
        <TableBody>
            <TableRow v-for="music in sortedMusic" :key="music.key">
                <TableCell>
                    <div class="flex justify-center items-center">
                        <img loading="lazy" :src="music.icon" class="h-10 w-10" />
                    </div>
                </TableCell>
                <TableCell>{{ music.title }}</TableCell>
                <TableCell>
                    <Tooltip
                        :title="music.title"
                        :content="
                            music.condition +
                            '. ' +
                            (music.bossPity
                                ? `Can also be unlocked by defeating ${music.bossPity} ${music.album} bosses.`
                                : 'No boss pity available.')
                        "
                    >
                        <Lock :unlocked="data.music[music.key]!.unlocked" :color="color" />
                    </Tooltip>
                </TableCell>
                <TableCell>{{ music.condition }}</TableCell>
                <TableCell>{{ music.bossPity ? ` ${music.bossPity} ${music.album} bosses` : 'none' }}</TableCell>
            </TableRow>
        </TableBody>
    </Table>
</template>
