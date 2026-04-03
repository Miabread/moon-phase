<script setup lang="ts">
import Lock from '@/components/custom/Lock.vue';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/shadcn/table';
import { data } from '@/data';
import { DEFAULT_RABBITS, RABBITS } from '@/constants';
import PercentProgress from '@/components/custom/PercentProgress.vue';
import { NAVIGATION } from '@/layout/navigation/constants';
import Tooltip from '@/components/custom/Tooltip.vue';
import { ROWS } from './constants';
</script>

<template>
    <Table>
        <TableHeader>
            <TableRow>
                <!-- Three empty rows for the icon and title -->
                <TableHead />
                <TableHead />

                <!-- And now one for each rabbit -->
                <TableHead v-for="rabbit of RABBITS" :key="rabbit.key">
                    <div class="flex justify-center items-center">
                        <Tooltip :title="`${rabbit.name} Rabbit`">
                            <img
                                :src="rabbit.icon"
                                :alt="rabbit.name"
                                class="h-10 w-10 rounded-full border"
                                :style="{ borderColor: NAVIGATION[2]!.color }"
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
                        <img :src="row.icon" class="h-10 w-10" />
                        <PercentProgress :percent="row.progress" :color="row.color" />
                    </div>
                </TableCell>

                <TableHead>
                    {{ row.title }}
                </TableHead>

                <!-- And now one for each rabbit -->
                <TableCell v-for="(rabbit, i) of RABBITS" :key="rabbit.key">
                    <Tooltip :title="`${rabbit.name} Rabbit`" :content="row.tooltip ?? RABBITS[i]!.unlockText">
                        <Lock
                            :unlocked="row.checked(data.rabbits[rabbit.key]!)"
                            :always-unlocked="row.tooltip === null && DEFAULT_RABBITS.includes(rabbit.key)"
                            :color="NAVIGATION[2]!.color"
                        />
                    </Tooltip>
                </TableCell>
            </TableRow>
        </TableBody>
    </Table>
</template>
