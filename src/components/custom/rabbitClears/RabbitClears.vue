<script setup lang="ts">
import Checkmark from '@/components/custom/Checkmark.vue';
import { Progress } from '@/components/shadcn/progress';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/shadcn/table';
import { data } from '@/data';
import { RABBITS } from '@/constants';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/shadcn/card';
import { Rabbit } from 'lucide-vue-next';
import { rabbitClearPercent } from './calc';
</script>

<template>
    <Card class="w-full" id="rabbitClears">
        <CardHeader>
            <CardTitle>
                <span class="flex flex-row items-center gap-5 text-nowrap">
                    <Rabbit /> Rabbit Clears
                    <Progress :model-value="rabbitClearPercent" />
                </span>
            </CardTitle>
        </CardHeader>
        <CardContent>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead />
                        <TableHead v-for="rabbit of RABBITS" :key="rabbit.key">
                            <div class="flex justify-center items-center">
                                <img :src="rabbit.icon" :alt="rabbit.name" class="h-10 w-10" />
                            </div>
                        </TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableHead> Class Unlocked </TableHead>
                        <TableCell v-for="rabbit of RABBITS" :key="rabbit.key">
                            <Checkmark :checked="data.rabbits[rabbit.key]!.unlocked" />
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableHead> Adept Palette </TableHead>
                        <TableCell v-for="rabbit of RABBITS" :key="rabbit.key">
                            <Checkmark :checked="data.rabbits[rabbit.key]!.palettes.adept" />
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableHead> Challenger Palette </TableHead>
                        <TableCell v-for="rabbit of RABBITS" :key="rabbit.key">
                            <Checkmark :checked="data.rabbits[rabbit.key]!.palettes.challenger" />
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableHead> Master Palette </TableHead>
                        <TableCell v-for="rabbit of RABBITS" :key="rabbit.key">
                            <Checkmark :checked="data.rabbits[rabbit.key]!.palettes.master" />
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableHead> Spellbound Palette </TableHead>
                        <TableCell v-for="rabbit of RABBITS" :key="rabbit.key">
                            <Checkmark :checked="data.rabbits[rabbit.key]!.palettes.spellbound" />
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableHead> Flower Ring </TableHead>
                        <TableCell v-for="rabbit of RABBITS" :key="rabbit.key">
                            <Checkmark :checked="data.rabbits[rabbit.key]!.rings.flower" />
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableHead> Star Ring </TableHead>
                        <TableCell v-for="rabbit of RABBITS" :key="rabbit.key">
                            <Checkmark :checked="data.rabbits[rabbit.key]!.rings.star" />
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableHead> Lunar Ring </TableHead>
                        <TableCell v-for="rabbit of RABBITS" :key="rabbit.key">
                            <Checkmark :checked="data.rabbits[rabbit.key]!.rings.lunar" />
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </CardContent>
    </Card>
</template>
