<script setup lang="ts">
import { Lock, LockOpen } from 'lucide-vue-next';

const props = defineProps<{
    unlocked?: boolean;
}>();
</script>

<template>
    <span class="flex justify-center items-center">
        <LockOpen v-if="props.unlocked" class="text-primary" />
        <Lock v-else class="text-destructive" />
    </span>
</template>
