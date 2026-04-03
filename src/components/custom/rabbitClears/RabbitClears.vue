<script setup lang="ts">
import Lock from '@/components/custom/Lock.vue';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/shadcn/table';
import { data } from '@/data';
import { DEFAULT_RABBITS, RABBITS } from '@/constants';
import { Rabbit } from 'lucide-vue-next';
import { rabbitClearPercents } from './calc';
import PercentProgress from '../PercentProgress.vue';
import { NAVIGATION } from '@/constants/navigation';

type Rabbit = (typeof data)['rabbits'][string];

const TEMP_ICONS = {
    normal: '//static.wikitide.net/rnswiki/b/b2/Difficulty_Normal.png',
    hard: '//static.wikitide.net/rnswiki/a/a2/Difficulty_Hard.png',
    lunar: '//static.wikitide.net/rnswiki/a/af/Difficulty_Lunar.png',

    rabbit: '//static.wikitide.net/rnswiki/5/56/Spr_trinket_small_rabbit_6.png',

    kingdom: '//static.wikitide.net/rnswiki/1/11/Area_The_Pale_Keep.png',
    extra: '//static.wikitide.net/rnswiki/7/76/Area_Looping_Hallway.png',

    flowerRing: '//static.wikitide.net/rnswiki/8/8d/Spr_trinket_magic_circle_n_0.png',
    starRing: '//static.wikitide.net/rnswiki/3/3a/Spr_trinket_magic_circle_h_0.png',
    lunarRing: '//static.wikitide.net/rnswiki/4/42/Spr_trinket_magic_circle_l_0.png',
};

const TEMP_COLORS = {
    normal: '#fddfa9',
    hard: '#ff6576',
    lunar: '#a372f1',
};

const rows = [
    {
        title: 'Class Unlocked',
        checked: (r: Rabbit) => r.unlocked,
        icons: [TEMP_ICONS.rabbit],
        progress: rabbitClearPercents.unlocked,
        color: TEMP_COLORS.hard,
        checkDefaultRabbits: true,
    },
    {
        title: 'Adept Palette',
        checked: (r: Rabbit) => r.palettes.adept,
        icons: [TEMP_ICONS.kingdom],
        progress: rabbitClearPercents.palettes.adept,
        color: TEMP_COLORS.hard,
    },
    {
        title: 'Challenger Palette',
        checked: (r: Rabbit) => r.palettes.challenger,
        icons: [TEMP_ICONS.extra],
        progress: rabbitClearPercents.palettes.challenger,
        color: TEMP_COLORS.hard,
    },
    {
        title: 'Master Palette',
        checked: (r: Rabbit) => r.palettes.master,
        icons: [TEMP_ICONS.kingdom],
        progress: rabbitClearPercents.palettes.master,
        color: TEMP_COLORS.lunar,
    },
    {
        title: 'Spellbound Palette',
        checked: (r: Rabbit) => r.palettes.spellbound,
        icons: [TEMP_ICONS.extra],
        progress: rabbitClearPercents.palettes.spellbound,
        color: TEMP_COLORS.lunar,
    },
    {
        title: 'Flower Ring',
        checked: (r: Rabbit) => r.rings.flower,
        icons: [TEMP_ICONS.flowerRing],
        progress: rabbitClearPercents.rings.flower,
        color: TEMP_COLORS.normal,
    },
    {
        title: 'Star Ring',
        checked: (r: Rabbit) => r.rings.star,
        icons: [TEMP_ICONS.starRing],
        progress: rabbitClearPercents.rings.star,
        color: TEMP_COLORS.hard,
    },
    {
        title: 'Lunar Ring',
        checked: (r: Rabbit) => r.rings.lunar,
        icons: [TEMP_ICONS.lunarRing],
        progress: rabbitClearPercents.rings.lunar,
        color: TEMP_COLORS.lunar,
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
                        <img
                            :src="rabbit.icon"
                            :alt="rabbit.name"
                            class="h-10 w-10 rounded-full border"
                            :style="{ borderColor: NAVIGATION[2]!.color }"
                        />
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
                        <img :src="row.icons[0]" class="h-10 w-10" />
                        <PercentProgress :percent="row.progress" :color="row.color" />
                    </div>
                </TableCell>

                <TableHead>
                    {{ row.title }}
                </TableHead>

                <!-- And now one for each rabbit -->
                <TableCell v-for="rabbit of RABBITS" :key="rabbit.key">
                    <Lock
                        :unlocked="row.checked(data.rabbits[rabbit.key]!)"
                        :always-unlocked="row.checkDefaultRabbits && DEFAULT_RABBITS.includes(rabbit.key)"
                        :color="NAVIGATION[2]!.color"
                    />
                </TableCell>
            </TableRow>
        </TableBody>
    </Table>
</template>
