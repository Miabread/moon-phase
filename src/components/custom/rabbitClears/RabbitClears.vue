<script setup lang="ts">
import Lock from '@/components/custom/Lock.vue';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/shadcn/table';
import { data } from '@/data';
import { DEFAULT_RABBITS, DIFFICULTIES, RABBITS } from '@/constants';
import { Rabbit } from 'lucide-vue-next';
import { rabbitClearPercents } from './calc';
import PercentProgress from '../PercentProgress.vue';
import { NAVIGATION } from '@/constants/navigation';
import Tooltip from '../Tooltip.vue';

type Rabbit = (typeof data)['rabbits'][string];

const TEMP_ICONS = {
    rabbit: '//static.wikitide.net/rnswiki/5/56/Spr_trinket_small_rabbit_6.png',

    kingdom: '//static.wikitide.net/rnswiki/1/11/Area_The_Pale_Keep.png',
    extra: '//static.wikitide.net/rnswiki/7/76/Area_Looping_Hallway.png',

    flowerRing: '//static.wikitide.net/rnswiki/8/8d/Spr_trinket_magic_circle_n_0.png',
    starRing: '//static.wikitide.net/rnswiki/3/3a/Spr_trinket_magic_circle_h_0.png',
    lunarRing: '//static.wikitide.net/rnswiki/4/42/Spr_trinket_magic_circle_l_0.png',
};

const rows = [
    {
        title: 'Class Unlocked',
        checked: (r: Rabbit) => r.unlocked,
        icon: TEMP_ICONS.rabbit,
        progress: rabbitClearPercents.unlocked,
        color: DIFFICULTIES.hard.color,
        tooltip: null,
    },
    {
        title: 'Adept Palette',
        checked: (r: Rabbit) => r.palettes.adept,
        icon: TEMP_ICONS.kingdom,
        progress: rabbitClearPercents.palettes.adept,
        color: DIFFICULTIES.hard.color,
        tooltip: 'Complete a Kingdom run on Hard',
    },
    {
        title: 'Challenger Palette',
        checked: (r: Rabbit) => r.palettes.challenger,
        icon: TEMP_ICONS.extra,
        progress: rabbitClearPercents.palettes.challenger,
        color: DIFFICULTIES.hard.color,
        tooltip: 'Complete a Extra run on Hard',
    },
    {
        title: 'Master Palette',
        checked: (r: Rabbit) => r.palettes.master,
        icon: TEMP_ICONS.kingdom,
        progress: rabbitClearPercents.palettes.master,
        color: DIFFICULTIES.lunar.color,
        tooltip: 'Complete a Kingdom run on Lunar',
    },
    {
        title: 'Spellbound Palette',
        checked: (r: Rabbit) => r.palettes.spellbound,
        icon: TEMP_ICONS.extra,
        progress: rabbitClearPercents.palettes.spellbound,
        color: DIFFICULTIES.lunar.color,
        tooltip: 'Complete a Extra run on Lunar',
    },
    {
        title: 'Flower Ring',
        checked: (r: Rabbit) => r.rings.flower,
        icon: TEMP_ICONS.flowerRing,
        progress: rabbitClearPercents.rings.flower,
        color: DIFFICULTIES.normal.color,
        tooltip: 'Complete a True Random or Chaotic Random run on Normal',
    },
    {
        title: 'Star Ring',
        checked: (r: Rabbit) => r.rings.star,
        icon: TEMP_ICONS.starRing,
        progress: rabbitClearPercents.rings.star,
        color: DIFFICULTIES.hard.color,
        tooltip: 'Complete a True Random or Chaotic Random run on Hard',
    },
    {
        title: 'Lunar Ring',
        checked: (r: Rabbit) => r.rings.lunar,
        icon: TEMP_ICONS.lunarRing,
        progress: rabbitClearPercents.rings.lunar,
        color: DIFFICULTIES.lunar.color,
        tooltip: 'Complete a True Random or Chaotic Random run on Lunar',
    },
];
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
            <TableRow v-for="row of rows" :key="row.title">
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
