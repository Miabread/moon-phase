<script setup lang="ts">
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/shadcn/tooltip';
import { computed } from 'vue';

const props = defineProps<{
    title?: string;
    content?: string;
}>();

const segmenter = new Intl.Segmenter('en', { granularity: 'sentence' });
const segments = computed(() => segmenter.segment(props.content ?? ''));
</script>

<template>
    <TooltipProvider>
        <Tooltip>
            <TooltipTrigger as-child>
                <slot />
            </TooltipTrigger>
            <TooltipContent class="flex flex-col justify-center items-center">
                <b>{{ props.title }}</b>
                <span v-for="(line, i) in segments" :key="i">{{ line.segment }}</span>
            </TooltipContent>
        </Tooltip>
    </TooltipProvider>
</template>
