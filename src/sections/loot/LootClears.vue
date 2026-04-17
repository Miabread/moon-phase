<script setup lang="ts">
import { Table, TableBody, TableCell, TableHead, TableRow } from '@/components/shadcn/table';
import { Tooltip } from '@/components/shadcn/tooltip';
import { LOOT } from './loot';
</script>

<template>
    <Table>
        <TableBody>
            <TableRow v-for="lootSet in LOOT" :key="lootSet.title">
                <TableHead>
                    {{ lootSet.title }}
                </TableHead>
                <TableCell v-for="loot in lootSet.loot" :key="loot.title">
                    <Tooltip :title="loot.title" class="flex justify-center items-center">
                        <img :src="loot.icon" :alt="loot.title" class="h-10 w-10" />
                    </Tooltip>
                </TableCell>
            </TableRow>
        </TableBody>
    </Table>
</template>
