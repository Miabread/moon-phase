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
            :class="cn('h-10 w-10 border', { grayscale: !props.data.unlocked?.value })"
            :style="{ borderColor: props.color }"
        />
    </Tooltip>
</template>
