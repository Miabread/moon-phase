<script setup lang="ts">
import { Table, TableRow, TableCell, TableBody } from '@/components/shadcn/table';
import { NAVIGATION } from '../navigation/navigation';
import { totalCompletion } from './percent';
import { Percent } from '@/lib/Percent';
import { AREAS } from '@/data/constants';
import { Card, CardContent } from '@/components/shadcn/card';
import { computed } from 'vue';

const COMPLETION_COMMENT_ZERO = 'No progress yet? Make sure to import your save files to the right!';

const COMPLETION_COMMENTS = [
    'The beginning of a journey...', // 0%
    'First enemy coming up. To forge ahead!', // 10%
    'How was your first fight? Plenty more where that came from.', // 20% (first boss on bar)
    'Phew, making good progress.', // 30%
    "Second enemy down, it looks like you've got this.", // 40% (second boss on bar)
    "You're officially half way there. Keep going!", // 50%
    "Was the mid boss rough? It's only harder from here...", // 60% (mid boss on bar)
    "You've reached the final stretch...", // 70%
    "Gather your steel, new and old, there's one final push!!", // 80% (treasure on bar)
    'AREA BOSS AHEAD!!', // 90%
    "You did it!!! Your journey has reached it's completion.", // 100% (area boss on bar)
];

const commentIndex = computed(() => Math.floor(totalCompletion.value.percent / 10));
</script>

<template>
    <div class="flex gap-4">
        <Card>
            <CardContent>
                <Table>
                    <TableBody>
                        <TableRow
                            v-for="{ color, ...section } in NAVIGATION.slice(1)"
                            :key="section.title"
                            class="text-center"
                        >
                            <TableCell> Your </TableCell>
                            <TableCell>
                                <span :style="{ color }">{{ section.title }}</span>
                            </TableCell>
                            <TableCell> are contributing </TableCell>
                            <TableCell>
                                <span :style="{ color }">
                                    {{
                                        new Percent(
                                            section.progress.value.current,
                                            totalCompletion.total,
                                        ).percent.toFixed(2)
                                    }}%
                                </span>
                            </TableCell>
                            <TableCell>out of </TableCell>
                            <TableCell>
                                <span :style="{ color }">
                                    {{
                                        new Percent(
                                            section.progress.value.total,
                                            totalCompletion.total,
                                        ).percent.toFixed(2)
                                    }}%
                                </span>
                            </TableCell>
                            <TableCell>to your</TableCell>
                            <TableCell>
                                <span :style="{ color: AREAS.keep.color }">Completion</span>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
        <Card class="grow">
            <CardContent class="flex h-full w-full items-center justify-center">
                <p v-if="totalCompletion.percent === 0">{{ COMPLETION_COMMENT_ZERO }}</p>
                <p v-else>{{ COMPLETION_COMMENTS[commentIndex] }}</p>
            </CardContent>
        </Card>
    </div>
</template>
