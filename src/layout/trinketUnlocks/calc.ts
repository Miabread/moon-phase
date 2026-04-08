import { TRINKETS_PAGES } from '@/layout/trinketUnlocks/trinkets';
import { data } from '@/data';
import { Percent } from '@/lib/Percent';
import { computed } from 'vue';

export const trinketUnlockPercents = TRINKETS_PAGES.map((page) =>
    computed(() =>
        Percent.array(page.flat(), (trinket) =>
            // This is weird, not sure why so much undefined handling but it crashes otherwise
            trinket ? (data.trinkets[trinket.key]?.unlocked ?? null) : null,
        ).labeled('trinkets'),
    ),
);

export const trinketUnlockPercent = computed(() => Percent.compound(trinketUnlockPercents).labeled('trinkets'));
