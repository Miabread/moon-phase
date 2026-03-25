<script setup lang="ts">
import { Icon } from '@iconify/vue';

const props = defineProps<{
    checked?: boolean;
}>();
</script>

<template>
    <span class="flex justify-center items-center">
        <Icon v-if="props.checked" icon="mdi:unlocked-variant" class="text-primary" />
        <Icon v-else icon="mdi:lock" class="text-destructive" />
    </span>
</template>
