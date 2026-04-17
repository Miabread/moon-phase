<script setup lang="ts">
import Lock from '@/components/custom/Lock.vue';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/shadcn/table';
import { data } from '@/data';
import { DEFAULT_RABBITS, RABBITS } from '@/sections/rabbits/rabbits';
import PercentProgress from '@/components/custom/PercentProgress.vue';
import Tooltip from '@/components/custom/Tooltip.vue';
import { ROWS } from './table';
import { rabbitClearPercentsByRabbit } from './percent';
import { AREAS } from '@/data/constants';
import Achievement from '@/sections/achievements/Achievement.vue';
import { ACHIEVEMENTS } from '@/sections/achievements/achievements';
import { CardContent, CardHeader, CardTitle, Card } from '@/components/shadcn/card';
import { Table2, Trophy } from 'lucide-vue-next';
import { achievementsPercents } from '../achievements/percent';

const color = AREAS.arsenal.color;
</script>

<template>
    <Card>
        <CardHeader>
            <CardTitle>
                <span class="flex flex-row items-center gap-5 text-nowrap font-normal text-lg">
                    <Trophy :style="{ color }" />
                    <h2>Achievements</h2>
                    <PercentProgress :percent="achievementsPercents.rabbits" :color="color" />
                </span>
            </CardTitle>
        </CardHeader>
        <CardContent>
            <div class="flex justify-around">
                <Achievement v-for="ach in ACHIEVEMENTS.rabbits" :key="ach.title" :data="ach" :color="color" />
            </div>
        </CardContent>
    </Card>

    <Card>
        <CardHeader>
            <CardTitle>
                <span class="flex flex-row items-center gap-5 text-nowrap font-normal text-lg">
                    <Table2 :style="{ color }" />
                    <h2>By Class</h2>
                </span>
            </CardTitle>
        </CardHeader>
        <CardContent>
            <Table>
                <TableHeader>
                    <TableRow>
                        <!-- Three empty rows for the icon and title -->
                        <TableHead />
                        <TableHead />

                        <!-- And now one for each rabbit -->
                        <TableHead v-for="(rabbit, i) of RABBITS" :key="rabbit.key">
                            <div class="flex justify-center items-center">
                                <Tooltip
                                    :title="`${rabbit.name} Rabbit`"
                                    :content="`${rabbitClearPercentsByRabbit[i]!.current} / ${rabbitClearPercentsByRabbit[i]!.total} ${rabbit.name} clears`"
                                >
                                    <img
                                        loading="lazy"
                                        :src="rabbit.icon"
                                        :alt="rabbit.name"
                                        class="h-10 w-10 rounded-full border"
                                        :style="{ borderColor: color }"
                                    />
                                </Tooltip>
                            </div>
                        </TableHead>

                        <TableHead />
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow v-for="row of ROWS" :key="row.title">
                        <!-- The following three cells have no header -->
                        <TableCell>
                            <div class="flex flex-col justify-center items-center">
                                <img loading="lazy" :src="row.icon" class="h-10 w-10" />
                                <PercentProgress :percent="row.progress" :color="row.color" />
                            </div>
                        </TableCell>

                        <TableHead>
                            {{ row.title }}
                        </TableHead>

                        <!-- And now one for each rabbit -->
                        <TableCell v-for="(rabbit, i) of RABBITS" :key="rabbit.key">
                            <Tooltip
                                :title="`${rabbit.name} ${row.title}`"
                                :content="row.condition ?? RABBITS[i]!.unlockText"
                            >
                                <Lock
                                    :unlocked="row.checked(data.rabbits[rabbit.key]!)"
                                    :always-unlocked="row.condition === null && DEFAULT_RABBITS.includes(rabbit.key)"
                                    :color="color"
                                />
                            </Tooltip>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </CardContent>
    </Card>
</template>
