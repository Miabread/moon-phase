import { totalCompletion } from '@/components/custom/completion/calc';
import Completion from '@/components/custom/completion/Completion.vue';
import DummyCard from '@/components/custom/DummyCard.vue';
import { musicUnlockPercent } from '@/components/custom/musicUnlocks/calc';
import MusicUnlocks from '@/components/custom/musicUnlocks/MusicUnlocks.vue';
import { rabbitClearPercent } from '@/components/custom/rabbitClears/calc';
import RabbitClears from '@/components/custom/rabbitClears/RabbitClears.vue';
import { Moon, Music, Rabbit, ScanHeart, Swords, Trophy } from 'lucide-vue-next';
import { computed } from 'vue';

const dummyProgress = computed(() => 15);

export const NAV_ITEMS = {
    completion: {
        order: 0,
        title: 'Completion',
        url: 'completion',
        icon: Moon,
        progress: totalCompletion,
        card: Completion,
        color: '#eef0d7',
    },
    achievements: {
        order: 1,
        title: 'Achievements',
        url: 'achievements',
        icon: Trophy,
        progress: dummyProgress,
        card: DummyCard,
        color: '#ff4b67',
    },
    rabbits: {
        order: 2,
        title: 'Rabbit Clears',
        url: 'rabbits',
        icon: Rabbit,
        progress: rabbitClearPercent,
        card: RabbitClears,
        color: '#555aac',
    },
    trinkets: {
        order: 3,
        title: 'Trinket Unlocks',
        url: 'trinkets',
        icon: ScanHeart,
        progress: dummyProgress,
        card: DummyCard,
        color: '#8d45ff',
    },
    loot: {
        order: 4,
        title: 'Loot Clears',
        url: 'loot',
        icon: Swords,
        progress: dummyProgress,
        card: DummyCard,
        color: '#ffe2b3',
    },
    music: {
        order: 5,
        title: 'Music Unlocks',
        url: 'music',
        icon: Music,
        progress: musicUnlockPercent,
        card: MusicUnlocks,
        color: '#77ffbb',
    },
};

export const NAV_ITEMS_ARRAY = Object.values(NAV_ITEMS).sort((a, b) => a.order - b.order);
