<script setup lang="ts">
import { Lock, LockOpen } from 'lucide-vue-next';

const props = defineProps<{
    checked?: boolean;
}>();
</script>

<template>
    <span class="flex justify-center items-center">
        <LockOpen v-if="props.checked" class="text-primary" />
        <Lock v-else class="text-destructive" />
    </span>
</template>
