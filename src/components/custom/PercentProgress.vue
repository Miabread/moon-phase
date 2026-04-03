<script setup lang="ts">
import type { Percent } from '@/lib/Percent';
import { type ComputedRef, type HTMLAttributes } from 'vue';
import Progress from '../shadcn/progress/Progress.vue';
import { resolve } from '@/lib/utils';
import Tooltip from './Tooltip.vue';

const props = defineProps<{
    class?: HTMLAttributes['class'];
    color?: string;
    percent: Percent | ComputedRef<Percent>;
}>();
</script>

<template>
    <Tooltip
        :title="`${resolve(props.percent).percent.toFixed(2)}%`"
        :content="
            resolve(props.percent).total === 0
                ? 'Work in Progress'
                : `${resolve(props.percent).current} / ${resolve(props.percent).total} ${resolve(props.percent).label}`
        "
    >
        <Progress :class="props.class" :color="color" :model-value="resolve(props.percent).percent" />
    </Tooltip>
</template>
