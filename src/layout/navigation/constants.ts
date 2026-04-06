import { totalCompletion } from '@/layout/completion/calc';
import Completion from '@/layout/completion/Completion.vue';
import EasterEgg from '@/components/custom/EasterEgg.vue';
import { musicUnlockPercent } from '@/layout/musicUnlocks/calc';
import MusicUnlocks from '@/layout/musicUnlocks/MusicUnlocks.vue';
import { rabbitClearPercent } from '@/layout/rabbitClears/calc';
import RabbitClears from '@/layout/rabbitClears/RabbitClears.vue';
import { Moon, Music, ScanHeart, Swords, Trophy } from 'lucide-vue-next';
import TrinketUnlocks from '@/layout/trinketUnlocks/TrinketUnlocks.vue';
import { trinketUnlockPercent } from '@/layout/trinketUnlocks/calc';
import { AREAS } from '@/constants';
import Achievements from '@/layout/achievements/Achievements.vue';
import LootClears from '@/layout/lootClears/LootClears.vue';
import { achievementsPercent } from '@/layout/achievements/calc';
import { lootClearPercent } from '@/layout/lootClears/calc';

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
        title: 'Achievements',
        url: 'achievements',
        icon: Trophy,
        progress: achievementsPercent,
        card: Achievements,
        color: AREAS.darkhouse.color,
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
        title: 'Trinket Unlocks',
        url: 'trinkets',
        icon: ScanHeart,
        progress: trinketUnlockPercent,
        card: TrinketUnlocks,
        color: AREAS.nest.color,
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
