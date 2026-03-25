<script setup lang="ts">
import Checkmark from './components/custom/Checkmark.vue';
import { Progress } from './components/ui/progress';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from './components/ui/table';
import { data, rabbitPercent, rabbitPercentAll } from './data';
import { RABBITS } from './constants';
import { Card, CardContent } from './components/ui/card';
</script>

<template>
    <Card class="w-full">
        <CardContent>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>
                            Rabbits
                            <Progress :model-value="rabbitPercentAll()"
                        /></TableHead>
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
                            Unlocked
                            <Progress :model-value="rabbitPercent((r) => r.unlocked)" />
                        </TableHead>
                        <TableCell v-for="rabbit of RABBITS" :key="rabbit.key">
                            <Checkmark :checked="data.rabbits[rabbit.key]!.unlocked" />
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableHead>
                            Adept Palette
                            <Progress :model-value="rabbitPercent((r) => r.palettes.adept)" />
                        </TableHead>
                        <TableCell v-for="rabbit of RABBITS" :key="rabbit.key">
                            <Checkmark :checked="data.rabbits[rabbit.key]!.palettes.adept" />
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableHead>
                            Challenger Palette
                            <Progress :model-value="rabbitPercent((r) => r.palettes.challenger)" />
                        </TableHead>
                        <TableCell v-for="rabbit of RABBITS" :key="rabbit.key">
                            <Checkmark :checked="data.rabbits[rabbit.key]!.palettes.challenger" />
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableHead>
                            Master Palette
                            <Progress :model-value="rabbitPercent((r) => r.palettes.master)" />
                        </TableHead>
                        <TableCell v-for="rabbit of RABBITS" :key="rabbit.key">
                            <Checkmark :checked="data.rabbits[rabbit.key]!.palettes.master" />
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableHead>
                            Spellbound Palette
                            <Progress :model-value="rabbitPercent((r) => r.palettes.spellbound)" />
                        </TableHead>
                        <TableCell v-for="rabbit of RABBITS" :key="rabbit.key">
                            <Checkmark :checked="data.rabbits[rabbit.key]!.palettes.spellbound" />
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableHead>
                            Flower Ring
                            <Progress :model-value="rabbitPercent((r) => r.rings.flower)" />
                        </TableHead>
                        <TableCell v-for="rabbit of RABBITS" :key="rabbit.key">
                            <Checkmark :checked="data.rabbits[rabbit.key]!.rings.flower" />
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableHead>
                            Star Ring
                            <Progress :model-value="rabbitPercent((r) => r.rings.star)" />
                        </TableHead>
                        <TableCell v-for="rabbit of RABBITS" :key="rabbit.key">
                            <Checkmark :checked="data.rabbits[rabbit.key]!.rings.star" />
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableHead>
                            Lunar Ring
                            <Progress :model-value="rabbitPercent((r) => r.rings.lunar)" />
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
