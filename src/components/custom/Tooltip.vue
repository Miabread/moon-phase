<script setup lang="ts">
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/shadcn/tooltip';

const props = defineProps<{
    title?: string;
    content?: string;
}>();
</script>

<template>
    <TooltipProvider>
        <Tooltip>
            <TooltipTrigger as-child>
                <slot />
            </TooltipTrigger>
            <TooltipContent class="flex flex-col justify-center items-center">
                <b>{{ props.title }}</b>
                <span>{{ props.content }}</span>
            </TooltipContent>
        </Tooltip>
    </TooltipProvider>
</template>
