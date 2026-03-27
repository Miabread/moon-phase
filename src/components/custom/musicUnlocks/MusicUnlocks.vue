<script setup lang="ts">
import { Table, TableRow, TableBody, TableCell } from '@/components/shadcn/table';
import { MUSIC } from '@/constants/music';
import Lock from '@/components/custom/Lock.vue';
import { data } from '@/data';
import { computed } from 'vue';

const sortedMUSIC = computed(() =>
    MUSIC.sort((a, b) => Number(data.music[a.key]!.unlocked) - Number(data.music[b.key]!.unlocked)),
);
</script>

<template>
    <Table>
        <TableBody>
            <TableRow v-for="music in sortedMUSIC" :key="music.key">
                <TableCell>
                    <div class="flex justify-center items-center">
                        <img :src="music.icon" class="h-10 w-10" />
                    </div>
                </TableCell>
                <TableCell>{{ music.title }}</TableCell>
                <TableCell><Lock :unlocked="data.music[music.key]!.unlocked" /></TableCell>
                <TableCell>{{ music.condition }}</TableCell>
            </TableRow>
        </TableBody>
    </Table>
</template>
