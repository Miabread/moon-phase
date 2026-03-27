<script setup lang="ts">
import Checkmark from '@/components/custom/Checkmark.vue';
import { Progress } from '@/components/shadcn/progress';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/shadcn/table';
import { data } from '@/data';
import { RABBITS } from '@/constants';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/shadcn/card';
import { Rabbit } from 'lucide-vue-next';
import { rabbitClearPercent, rabbitClearPercents } from './calc';
</script>

<template>
    <Card class="w-full" id="rabbitClears">
        <CardHeader>
            <CardTitle>
                <span class="flex flex-row items-center gap-1"> <Rabbit /> Rabbit Clears </span>
            </CardTitle>
        </CardHeader>
        <CardContent>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>
                            Rabbits {{ Math.floor(rabbitClearPercent) }}%
                            <Progress :model-value="rabbitClearPercent" />
                        </TableHead>
                        <TableHead v-for="rabbit of RABBITS" :key="rabbit.key">
                            <div class="flex justify-center items-center">
                                <img :src="rabbit.icon" :alt="rabbit.name" />
                            </div>
                        </TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableHead>
                            Class Unlocked
                            <Progress :model-value="rabbitClearPercents.unlocked.value" />
                        </TableHead>
                        <TableCell v-for="rabbit of RABBITS" :key="rabbit.key">
                            <Checkmark :checked="data.rabbits[rabbit.key]!.unlocked" />
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableHead>
                            Adept Palette
                            <Progress :model-value="rabbitClearPercents.palettes.adept.value" />
                        </TableHead>
                        <TableCell v-for="rabbit of RABBITS" :key="rabbit.key">
                            <Checkmark :checked="data.rabbits[rabbit.key]!.palettes.adept" />
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableHead>
                            Challenger Palette
                            <Progress :model-value="rabbitClearPercents.palettes.challenger.value" />
                        </TableHead>
                        <TableCell v-for="rabbit of RABBITS" :key="rabbit.key">
                            <Checkmark :checked="data.rabbits[rabbit.key]!.palettes.challenger" />
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableHead>
                            Master Palette
                            <Progress :model-value="rabbitClearPercents.palettes.master.value" />
                        </TableHead>
                        <TableCell v-for="rabbit of RABBITS" :key="rabbit.key">
                            <Checkmark :checked="data.rabbits[rabbit.key]!.palettes.master" />
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableHead>
                            Spellbound Palette
                            <Progress :model-value="rabbitClearPercents.palettes.spellbound.value" />
                        </TableHead>
                        <TableCell v-for="rabbit of RABBITS" :key="rabbit.key">
                            <Checkmark :checked="data.rabbits[rabbit.key]!.palettes.spellbound" />
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableHead>
                            Flower Ring
                            <Progress :model-value="rabbitClearPercents.rings.flower.value" />
                        </TableHead>
                        <TableCell v-for="rabbit of RABBITS" :key="rabbit.key">
                            <Checkmark :checked="data.rabbits[rabbit.key]!.rings.flower" />
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableHead>
                            Star Ring
                            <Progress :model-value="rabbitClearPercents.rings.star.value" />
                        </TableHead>
                        <TableCell v-for="rabbit of RABBITS" :key="rabbit.key">
                            <Checkmark :checked="data.rabbits[rabbit.key]!.rings.star" />
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableHead>
                            Lunar Ring
                            <Progress :model-value="rabbitClearPercents.rings.lunar.value" />
                        </TableHead>
                        <TableCell v-for="rabbit of RABBITS" :key="rabbit.key">
                            <Checkmark :checked="data.rabbits[rabbit.key]!.rings.lunar" />
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </CardContent>
    </Card>
</template>
