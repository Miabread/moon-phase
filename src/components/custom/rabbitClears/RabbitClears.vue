<script setup lang="ts">
import Lock from '@/components/custom/Lock.vue';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/shadcn/table';
import { data } from '@/data';
import { RABBITS } from '@/constants';
import { Rabbit } from 'lucide-vue-next';

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

const rows = [
    {
        title: 'Class Unlocked',
        checked: (r: Rabbit) => r.unlocked,
        icons: [TEMP_ICONS.hard, TEMP_ICONS.rabbit],
    },
    {
        title: 'Adept Palette',
        checked: (r: Rabbit) => r.palettes.adept,
        icons: [TEMP_ICONS.hard, TEMP_ICONS.kingdom],
    },
    {
        title: 'Challenger Palette',
        checked: (r: Rabbit) => r.palettes.challenger,
        icons: [TEMP_ICONS.hard, TEMP_ICONS.extra],
    },
    {
        title: 'Master Palette',
        checked: (r: Rabbit) => r.palettes.master,
        icons: [TEMP_ICONS.lunar, TEMP_ICONS.kingdom],
    },
    {
        title: 'Spellbound Palette',
        checked: (r: Rabbit) => r.palettes.spellbound,
        icons: [TEMP_ICONS.lunar, TEMP_ICONS.extra],
    },
    {
        title: 'Flower Ring',
        checked: (r: Rabbit) => r.rings.flower,
        icons: [TEMP_ICONS.normal, TEMP_ICONS.flowerRing],
    },
    {
        title: 'Star Ring',
        checked: (r: Rabbit) => r.rings.star,
        icons: [TEMP_ICONS.hard, TEMP_ICONS.starRing],
    },
    {
        title: 'Lunar Ring',
        checked: (r: Rabbit) => r.rings.lunar,
        icons: [TEMP_ICONS.lunar, TEMP_ICONS.lunarRing],
    },
];
</script>

<template>
    <Table>
        <TableHeader>
            <TableRow>
                <!-- Three empty rows for the two icons and title -->
                <TableHead />
                <TableHead />
                <TableHead />

                <!-- And now one for each rabbit -->
                <TableHead v-for="rabbit of RABBITS" :key="rabbit.key">
                    <div class="flex justify-center items-center">
                        <img :src="rabbit.icon" :alt="rabbit.name" class="h-10 w-10" />
                    </div>
                </TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
            <TableRow v-for="row of rows" :key="row.title">
                <!-- The following three cells have no header -->
                <TableCell>
                    <div class="flex justify-center items-center">
                        <img :src="row.icons[0]" class="h-5 w-5" />
                    </div>
                </TableCell>
                <TableCell>
                    <div class="flex justify-center items-center">
                        <img :src="row.icons[1]" class="h-10 w-10" />
                    </div>
                </TableCell>
                <TableHead> {{ row.title }} </TableHead>

                <!-- And now one for each rabbit -->
                <TableCell v-for="rabbit of RABBITS" :key="rabbit.key">
                    <Lock :unlocked="row.checked(data.rabbits[rabbit.key]!)" />
                </TableCell>
            </TableRow>
        </TableBody>
    </Table>
</template>
