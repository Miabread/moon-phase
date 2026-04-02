<script setup lang="ts">
import type { Percent } from '@/lib/Percent';
import { type ComputedRef, type HTMLAttributes } from 'vue';
import Progress from '../shadcn/progress/Progress.vue';
import { resolve } from '@/lib/utils';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/shadcn/tooltip';

const props = defineProps<{
    class?: HTMLAttributes['class'];
    color?: string;
    percent: Percent | ComputedRef<Percent>;
}>();
</script>

<template>
    <TooltipProvider>
        <Tooltip>
            <TooltipTrigger as-child>
                <Progress :class="props.class" :color="color" :model-value="resolve(props.percent).percent" />
            </TooltipTrigger>
            <TooltipContent v-if="resolve(props.percent).total === 0">Work in Progress</TooltipContent>
            <TooltipContent v-else>
                {{ resolve(props.percent).current }} / {{ resolve(props.percent).total }}
                {{ resolve(props.percent).label }}
            </TooltipContent>
        </Tooltip>
    </TooltipProvider>
</template>
