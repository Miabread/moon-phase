<script setup lang="ts">
import Tooltip from '@/components/custom/Tooltip.vue';
import type { Achievement } from './achievements';
import { cn } from '@/lib/utils';

const props = defineProps<{
    data: Achievement;
    color?: string;
}>();
</script>

<template>
    <Tooltip :title="props.data.title" :content="props.data.description">
        <img
            loading="lazy"
            :src="props.data.icon"
            :class="cn('border', props.data.unlocked?.value ? 'h-10 w-10 ' : 'h-8 w-8 grayscale')"
            :style="{ borderColor: props.color }"
        />
    </Tooltip>
</template>
