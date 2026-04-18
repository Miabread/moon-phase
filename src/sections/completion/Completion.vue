<script setup lang="ts">
import { Table, TableRow, TableCell, TableBody } from '@/components/shadcn/table';
import { NAVIGATION } from '../navigation/navigation';
import { totalCompletion } from './percent';
import { Percent } from '@/lib/Percent';
import { AREAS } from '@/data/constants';
import { Card, CardContent } from '@/components/shadcn/card';
</script>

<template>
    <Card class="w-min">
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
                                    new Percent(section.progress.value.current, totalCompletion.total).percent.toFixed(
                                        2,
                                    )
                                }}%
                            </span>
                        </TableCell>
                        <TableCell>out of </TableCell>
                        <TableCell>
                            <span :style="{ color }">
                                {{
                                    new Percent(section.progress.value.total, totalCompletion.total).percent.toFixed(2)
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
</template>
