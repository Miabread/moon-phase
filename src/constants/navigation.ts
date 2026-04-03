import { totalCompletion } from '@/layout/completion/calc';
import Completion from '@/layout/completion/Completion.vue';
import DummyCard from '@/components/custom/DummyCard.vue';
import EasterEgg from '@/components/custom/EasterEgg.vue';
import { musicUnlockPercent } from '@/layout/musicUnlocks/calc';
import MusicUnlocks from '@/layout/musicUnlocks/MusicUnlocks.vue';
import { rabbitClearPercent } from '@/layout/rabbitClears/calc';
import RabbitClears from '@/layout/rabbitClears/RabbitClears.vue';
import { Percent } from '@/lib/Percent';
import { Moon, Music, ScanHeart, Swords, Trophy } from 'lucide-vue-next';
import { computed } from 'vue';
import TrinketUnlocks from '@/layout/trinketUnlocks/TrinketUnlocks.vue';

const dummyProgress = computed(() => new Percent(0, 0));

export const NAVIGATION = [
    {
        title: 'Completion',
        url: 'completion',
        icon: Moon,
        progress: totalCompletion,
        card: Completion,
        color: '#eef0d7',
    },
    {
        title: 'Achievements',
        url: 'achievements',
        icon: Trophy,
        progress: dummyProgress,
        card: DummyCard,
        color: '#ff4b67',
    },
    {
        title: 'Rabbit Clears',
        url: 'rabbits',
        icon: EasterEgg,
        progress: rabbitClearPercent,
        card: RabbitClears,
        color: '#555aac',
    },
    {
        title: 'Trinket Unlocks',
        url: 'trinkets',
        icon: ScanHeart,
        progress: dummyProgress,
        card: TrinketUnlocks,
        color: '#8d45ff',
    },
    {
        title: 'Loot Clears',
        url: 'loot',
        icon: Swords,
        progress: dummyProgress,
        card: DummyCard,
        color: '#ffe2b3',
    },
    {
        title: 'Music Unlocks',
        url: 'music',
        icon: Music,
        progress: musicUnlockPercent,
        card: MusicUnlocks,
        color: '#77ffbb',
    },
];
