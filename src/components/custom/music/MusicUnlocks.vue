<script setup lang="ts">
import { Table, TableRow, TableBody, TableCell } from '@/components/shadcn/table';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/shadcn/card';
import { Music } from 'lucide-vue-next';
import { MUSIC } from '@/constants/music';
import Checkmark from '../Checkmark.vue';
import { data } from '@/data';
import { computed } from 'vue';
import { Progress } from '@/components/shadcn/progress';
import { musicPercent } from './calc';

const sortedMUSIC = computed(() =>
    MUSIC.sort((a, b) => Number(data.music[a.key]!.unlocked) - Number(data.music[b.key]!.unlocked)),
);
</script>

<template>
    <Card class="w-full" id="musicUnlocks">
        <CardHeader>
            <CardTitle>
                <span class="flex flex-row items-center gap-5 text-nowrap">
                    <Music /> Music Unlocks <Progress :model-value="musicPercent" />
                </span>
            </CardTitle>
        </CardHeader>
        <CardContent>
            <Table>
                <TableBody>
                    <TableRow v-for="music in sortedMUSIC" :key="music.key">
                        <TableCell>
                            <div class="flex justify-center items-center">
                                <img :src="music.icon" class="h-10 w-10" />
                            </div>
                        </TableCell>
                        <TableCell>{{ music.title }}</TableCell>
                        <TableCell><Checkmark :checked="data.music[music.key]!.unlocked" /></TableCell>
                        <TableCell>{{ music.condition }}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </CardContent>
    </Card>
</template>
