<script setup lang="ts">
import { Table, TableRow, TableBody, TableCell } from '@/components/shadcn/table';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/shadcn/card';
import { Music } from 'lucide-vue-next';
import { MUSIC } from '@/constants/music';
import Checkmark from '../Checkmark.vue';
import { data } from '@/data';
import { computed } from 'vue';

const sortedMUSIC = computed(() =>
    MUSIC.sort((a, b) => Number(data.music[a.key]!.unlocked) - Number(data.music[b.key]!.unlocked)),
);
</script>

<template>
    <Card class="w-full" id="music">
        <CardHeader>
            <CardTitle>
                <span class="flex flex-row items-center gap-1"> <Music /> Music Unlocks </span>
            </CardTitle>
        </CardHeader>
        <CardContent>
            <Table>
                <TableBody>
                    <TableRow v-for="music in sortedMUSIC" :key="music.key">
                        <TableCell>{{ music.title }}</TableCell>
                        <TableCell><Checkmark :checked="data.music[music.key]!.unlocked" /></TableCell>
                        <TableCell>{{ music.condition }}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </CardContent>
    </Card>
</template>
