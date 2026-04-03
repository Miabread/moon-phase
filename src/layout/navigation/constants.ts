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
import { trinketUnlockPercent } from '@/layout/trinketUnlocks/calc';
import { AREAS } from '@/constants';

const dummyProgress = computed(() => new Percent(0, 0));

export const NAVIGATION = [
    {
        title: 'Completion',
        url: 'completion',
        icon: Moon,
        progress: totalCompletion,
        specialProgressBar: true,
        card: Completion,
        color: AREAS.keep.color,
        hideProd: true,
    },
    {
        title: 'Achievements',
        url: 'achievements',
        icon: Trophy,
        progress: dummyProgress,
        card: DummyCard,
        color: AREAS.darkhouse.color,
        hideProd: true,
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
        progress: dummyProgress,
        card: DummyCard,
        color: AREAS.streets.color,
        hideProd: true,
    },
    {
        title: 'Music Unlocks',
        url: 'music',
        icon: Music,
        progress: musicUnlockPercent,
        card: MusicUnlocks,
        color: AREAS.lakeside.color,
    },
].filter((n) => !n.hideProd || import.meta.env.DEV);
