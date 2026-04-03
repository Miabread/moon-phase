<script setup lang="ts">
import Lock from '@/components/custom/Lock.vue';
import PercentProgress from '@/components/custom/PercentProgress.vue';
import Tooltip from '@/components/custom/Tooltip.vue';
import Table from '@/components/shadcn/table/Table.vue';
import TableBody from '@/components/shadcn/table/TableBody.vue';
import TableCell from '@/components/shadcn/table/TableCell.vue';
import TableRow from '@/components/shadcn/table/TableRow.vue';
import { NAVIGATION } from '@/constants/navigation';
import { TRINKETS_PAGES } from '@/constants/trinkets';
import { data } from '@/data';
import { Percent } from '@/lib/Percent';
</script>

<template>
    <section v-for="(page, page_i) in TRINKETS_PAGES.slice(0, 2)" :key="page_i" class="mt-5">
        <span class="flex flex-row items-center gap-5 text-nowrap text-xl">
            <h2>Page {{ page_i + 1 }}</h2>
            <PercentProgress :percent="new Percent(50, 100)" :color="NAVIGATION[3]!.color" />
        </span>
        <Table class="max-w-2/3 mx-auto">
            <TableBody>
                <TableRow v-for="(row, row_i) in page" :key="row_i">
                    <TableCell v-for="(trinket, col_i) in row" :key="col_i">
                        <Tooltip
                            v-if="trinket"
                            :title="trinket.title"
                            :content="trinket.condition"
                            class="flex justify-center items-center"
                        >
                            <img
                                v-if="data.trinkets[trinket.key]!.unlocked"
                                :src="trinket.icon"
                                :alt="trinket.title"
                                class="h-10 w-10"
                            />
                            <Lock v-else :color="NAVIGATION[3]!.color" class="h-10 w-10" />
                        </Tooltip>
                    </TableCell>
                </TableRow>
            </TableBody>
        </Table>
    </section>
</template>
