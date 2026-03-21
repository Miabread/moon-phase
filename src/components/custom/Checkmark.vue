<script setup lang="ts">
import { Icon } from '@iconify/vue';

const props = defineProps<{
    checked?: boolean;
}>();
</script>

<template>
    <Icon v-if="props.checked" icon="mdi:check-box" class="text-primary" />
    <Icon v-else icon="mdi:cancel-box" class="text-destructive" />
</template>
