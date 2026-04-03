<script setup lang="ts">
import { Rabbit } from 'lucide-vue-next';
import Tooltip from './Tooltip.vue';
import type { HTMLAttributes } from 'vue';

const props = defineProps<{ style?: HTMLAttributes['style'] }>();
</script>

<template>
    <Tooltip title="🥕" as-child>
        <Rabbit v-bind="props" class="hover:animate-[bounce_250ms_infinite]" />
    </Tooltip>
</template>
