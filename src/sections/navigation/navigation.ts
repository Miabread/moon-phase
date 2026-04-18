import { totalCompletion } from '@/sections/completion/percent';
import Completion from '@/sections/completion/Completion.vue';
import EasterEgg from '@/components/custom/EasterEgg.vue';
import { musicUnlockPercent } from '@/sections/music/percent';
import MusicUnlocks from '@/sections/music/MusicUnlocks.vue';
import { rabbitClearPercent } from '@/sections/rabbits/percent';
import RabbitClears from '@/sections/rabbits/RabbitClears.vue';
import { Moon, Music, ScanHeart, Swords, Trophy } from 'lucide-vue-next';
import TrinketUnlocks from '@/sections/trinkets/TrinketUnlocks.vue';
import { trinketUnlockPercent } from '@/sections/trinkets/percent';
import { AREAS } from '@/data/constants';
import Achievements from '@/sections/achievements/Achievements.vue';
import LootClears from '@/sections/loot/LootClears.vue';
import { achievementsPercent } from '@/sections/achievements/percent';
import { lootClearPercent } from '@/sections/loot/percent';

export const NAVIGATION = [
    {
        title: 'Completion',
        url: 'completion',
        icon: Moon,
        progress: totalCompletion,
        specialProgressBar: true,
        card: Completion,
        color: AREAS.keep.color,
    },
    {
        title: 'Trinket Unlocks',
        url: 'trinkets',
        icon: ScanHeart,
        progress: trinketUnlockPercent,
        card: TrinketUnlocks,
        color: AREAS.nest.color,
    },
    {
        title: 'Rabbit Clears',
        url: 'rabbits',
        icon: EasterEgg,
        progress: rabbitClearPercent,
        card: RabbitClears,
        color: AREAS.arsenal.color,
    },
    {
        title: 'Achievements',
        url: 'achievements',
        icon: Trophy,
        progress: achievementsPercent,
        card: Achievements,
        color: AREAS.darkhouse.color,
    },
    {
        title: 'Loot Clears',
        url: 'loot',
        icon: Swords,
        progress: lootClearPercent,
        card: LootClears,
        color: AREAS.streets.color,
    },
    {
        title: 'Music Unlocks',
        url: 'music',
        icon: Music,
        progress: musicUnlockPercent,
        card: MusicUnlocks,
        color: AREAS.lakeside.color,
    },
];
